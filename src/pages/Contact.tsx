import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

type FormState = {
  name: string
  email: string
  business: string
  service: string
  description: string
  website: string
}

const initialState: FormState = {
  name: '',
  email: '',
  business: '',
  service: '',
  description: '',
  website: '',
}

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error'

// Default recipient: FormSubmit integration for traxenadigital@gmail.com.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/traxenadigital@gmail.com'
const endpoint = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? '').trim() || FORMSUBMIT_ENDPOINT

const fieldOrder = ['name', 'email', 'service', 'description'] as const

const serviceLabels: Record<string, string> = {
  'website-design': 'Website Design',
  'digital-solutions': 'Digital Solutions',
  redesign: 'Website Redesign',
  other: 'Other / Not Sure',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const controllerRef = useRef<AbortController | null>(null)
  const submissionIdRef = useRef(0)
  const isSubmittingRef = useRef(false)

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  const focusFirstField = () => {
    const field = document.getElementById('name')
    if (!field) return

    field.focus({ preventScroll: true })
  }

  const scrollFormIntoView = () => {
    const target = document.getElementById('name')?.closest('.form-row') as HTMLElement | null
    if (!target) return

    const cta = document.querySelector('.page-hero__actions .btn') as HTMLElement | null
    const header = document.querySelector('.header') as HTMLElement | null
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const rowTop = target.getBoundingClientRect().top + window.scrollY
    const ctaBottom = cta ? cta.getBoundingClientRect().bottom + window.scrollY : rowTop - 120

    // Hide the CTA above the viewport while keeping the first field below the nav.
    const hideCtaScroll = ctaBottom + 12
    const keepFieldBelowNav = rowTop - (headerHeight + 24)
    const nextScroll = Math.min(hideCtaScroll, keepFieldBelowNav)

    window.scrollTo({
      top: Math.max(0, nextScroll),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  useEffect(() => {
    if (!formOpen) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealForm = () => {
      focusFirstField()
      scrollFormIntoView()
    }

    if (reduceMotion) {
      const frame = requestAnimationFrame(revealForm)
      return () => cancelAnimationFrame(frame)
    }

    const timer = window.setTimeout(revealForm, 450)
    return () => window.clearTimeout(timer)
  }, [formOpen])

  const handleStartDiscussion = () => {
    if (formOpen) {
      focusFirstField()
      scrollFormIntoView()
      return
    }
    setFormOpen(true)
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.service.trim()) next.service = 'Please select a service of interest.'
    if (!form.description.trim()) next.description = 'Please tell us what you’d like to achieve.'
    setErrors(next)
    return next
  }

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isSubmittingRef.current) return

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      const firstField = fieldOrder.find((field) => nextErrors[field])
      if (firstField) {
        const element = document.getElementById(firstField)
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        element?.focus()
        element?.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' })
      }
      return
    }

    // Honeypot: a filled hidden field indicates an automated submission.
    if (form.website.trim() !== '') {
      setStatus('error')
      return
    }

    isSubmittingRef.current = true
    setSubmitting(true)
    setStatus('sending')
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    const submissionId = ++submissionIdRef.current

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: form.name.trim(),
          'Email Address': form.email.trim(),
          ...(form.business.trim()
            ? { 'Business / Organisation': form.business.trim() }
            : {}),
          'Service of Interest': serviceLabels[form.service] ?? form.service,
          'What Would You Like to Achieve?': form.description.trim(),
          _subject: `New Project Enquiry | Traxena Digital - ${form.name.trim()}`,
          _replyto: form.email.trim(),
          _template: 'table',
        }),
        signal: controller.signal,
      })

      if (submissionId !== submissionIdRef.current) return

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      // FormSubmit answers with JSON: only treat an explicit success flag as sent.
      let payload: { success?: boolean | string } | null = null
      try {
        payload = (await response.json()) as { success?: boolean | string }
      } catch {
        payload = null
      }

      const accepted =
        payload !== null && (payload.success === true || payload.success === 'true')
      if (!accepted) {
        throw new Error('Submission rejected by the endpoint')
      }

      setStatus('success')
      setForm(initialState)
    } catch (error) {
      if (submissionId !== submissionIdRef.current) return
      if (error instanceof DOMException && error.name === 'AbortError') return
      setStatus('error')
    } finally {
      if (submissionId === submissionIdRef.current) {
        setSubmitting(false)
        isSubmittingRef.current = false
        controllerRef.current = null
      }
    }
  }

  const buttonLabel = submitting ? 'Sending…' : 'Send Enquiry'

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Let’s Talk About Your Project</h1>
          <p className="page-hero__lead">
            Tell us a little about what you have in mind. Whether you’re starting something new or looking to strengthen your online presence, we’d love to understand your goals and explore how we can help.
          </p>
          <div className="page-hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleStartDiscussion}
              aria-expanded={formOpen}
              aria-controls="contact-form-panel"
            >
              Get Started <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <div
        id="contact-form-panel"
        className={`contact-reveal${formOpen ? ' is-open' : ''}`}
        aria-hidden={!formOpen}
        inert={!formOpen}
      >
        <div className="contact-reveal__inner">
          <section className="section">
            <div className="container contact-grid">
              <div className="card contact-card">
                <h2 id="enquiry-form-title" className="sr-only">Enquiry form</h2>
                <form className="contact-form" aria-labelledby="enquiry-form-title" onSubmit={onSubmit} noValidate>
                  <div className="form-honeypot" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => updateField('website', e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <label className="form-label" htmlFor="name">Name <span aria-label="required">*</span></label>
                    <input
                      id="name"
                      name="name"
                      className="form-input"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
                  </div>

                  <div className="form-row">
                    <label className="form-label" htmlFor="email">Email address <span aria-label="required">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
                  </div>

                  <div className="form-row">
                    <label className="form-label" htmlFor="business">Business or organisation (optional)</label>
                    <input
                      id="business"
                      name="business"
                      className="form-input"
                      autoComplete="organization"
                      value={form.business}
                      onChange={(e) => updateField('business', e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <label className="form-label" htmlFor="service">Service of interest <span aria-label="required">*</span></label>
                    <select
                      id="service"
                      name="service"
                      className="form-input"
                      required
                      value={form.service}
                      onChange={(e) => updateField('service', e.target.value)}
                      aria-invalid={errors.service ? 'true' : 'false'}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="">Select an option</option>
                      <option value="website-design">Website Design</option>
                      <option value="digital-solutions">Digital Solutions</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                    {errors.service && <p id="service-error" className="form-error">{errors.service}</p>}
                  </div>

                  <div className="form-row">
                    <label className="form-label" htmlFor="description">What would you like to achieve? <span aria-label="required">*</span></label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-textarea"
                      rows={5}
                      required
                      placeholder="Tell us about your business, what you need, and any deadlines."
                      value={form.description}
                      onChange={(e) => updateField('description', e.target.value)}
                      aria-invalid={errors.description ? 'true' : 'false'}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                    />
                    {errors.description && <p id="description-error" className="form-error">{errors.description}</p>}
                  </div>

                  <button type="submit" className="btn btn--primary" disabled={submitting}>
                    {buttonLabel}
                  </button>

                  {status === 'success' && (
                    <div className="form-status form-status--success" role="status" aria-live="polite">
                      <p className="form-status__title">Your enquiry has been sent.</p>
                      <p className="form-status__text">
                        Thank you. We’ll review your details and get in touch using the email address you provided.
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form-status form-status--error" role="alert" aria-live="assertive">
                      <p className="form-status__title">We couldn’t send your enquiry.</p>
                      <p className="form-status__text">
                        Please try again in a moment, or email us directly at{' '}
                        <a href="mailto:traxenadigital@gmail.com">traxenadigital@gmail.com</a>.
                      </p>
                    </div>
                  )}
                </form>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}
