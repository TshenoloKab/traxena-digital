import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.jpg'
import ProjectShowcase from '../components/ProjectShowcase'
import { projects } from '../data/projects'
import './Home.css'

export default function Home() {
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.add('js-reveals')

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return () => root.classList.remove('js-reveals')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('js-reveals')
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <div className="hero__text">
            <h1 className="hero__title">Your Partner in Digital Growth.</h1>
            <p className="hero__lead">
              We create professional websites and practical digital solutions that help businesses establish and strengthen their digital presence.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary">Explore Services →</Link>
              <Link to="/work" className="btn btn--primary">Explore Our Work →</Link>
              <Link to="/contact" className="btn btn--primary">Get Started →</Link>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src={heroImage}
              alt="Traxena Digital — website design and digital solutions for businesses"
              className="hero__image"
              width={1376}
              height={768}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2 className="section__title">Selected Projects</h2>
            <p className="section__lead">A glimpse of the digital experiences we create for businesses.</p>
          </div>
          <ProjectShowcase projects={projects} ariaLabel="Selected projects showcase" showHint={false} />
          <div className="home-section-action" data-reveal>
            <Link to="/work" className="btn btn--ghost">View all work →</Link>
          </div>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <div className="about-preview" data-reveal>
            <div className="about-preview__content">
              <h2 className="section__title">Helping Businesses Make the Most of Technology</h2>
              <p className="about-preview__lead">Traxena Digital is a technology business based in Botswana, helping small businesses, service providers, independent professionals and startups establish a professional digital presence and make practical use of technology.</p>
              <p className="about-preview__lead">We focus on Website Design and Digital Solutions that are clear, credible and useful — helping businesses present what they do and make it easier for customers to connect with them.</p>
              <div className="about-preview__cta">
                <Link to="/about" className="btn btn--primary btn--xs">Learn about Traxena Digital →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container cta">
          <div className="cta__content" data-reveal>
            <h2 className="cta__title">Your Partner in Digital Growth.</h2>
            <p className="cta__lead">We create professional websites and practical digital solutions that help businesses establish and strengthen their digital presence.</p>
            <div className="cta__actions">
              <Link to="/services" className="btn btn--primary btn--xs">View Services →</Link>
              <Link to="/work" className="btn btn--primary btn--xs">See Our Work →</Link>
              <Link to="/contact" className="btn btn--primary btn--xs">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}