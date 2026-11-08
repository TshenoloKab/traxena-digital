import { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'
import './Work.css'

export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotionRef.current) return

    let frame = 0
    const step = () => {
      const track = trackRef.current
      if (track && !paused) {
        track.scrollLeft += 0.45
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0
        }
      }
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [paused])

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector<HTMLElement>('.project-card')
    const amount = card ? card.offsetWidth + 24 : 360
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
    setPaused(true)
  }

  return (
    <>
      <section className="page-hero work-page-hero">
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Explore our work</h1>
          <p className="page-hero__lead">A glimpse of the digital experiences we create for businesses.</p>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div
            className="showcase"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false)
              }
            }}
            onTouchStart={() => setPaused(true)}
          >
            <div className="showcase__viewport">
              <div className="showcase__track" ref={trackRef} tabIndex={0} aria-label="Project showcase">
                <div className="showcase__group">
                  {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} featured={false} />
                  ))}
                </div>
                <div className="showcase__group" aria-hidden="true" inert>
                  {projects.map((project) => (
                    <ProjectCard key={`${project.slug}-duplicate`} project={project} featured={false} />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="showcase__arrow showcase__arrow--prev"
                aria-label="Scroll to previous projects"
                onClick={() => scrollByCard(-1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M15 6L9 12L15 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="showcase__arrow showcase__arrow--next"
                aria-label="Scroll to next projects"
                onClick={() => scrollByCard(1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 6L15 12L9 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

            <p className="showcase__hint">
              Hover or focus to pause. Use the arrows or swipe to browse.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        text="Whether you're building a business, launching a brand or developing a digital product, let's explore how we can bring your idea to life."
        buttonLabel="Discuss Your Project →"
        to="/contact"
      />
    </>
  )
}