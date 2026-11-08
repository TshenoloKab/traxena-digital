import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { title: 'Thoughtful design', text: 'Clean, purposeful interfaces that respect the user’s time.' },
  { title: 'Useful solutions', text: 'Pragmatic features that solve real problems, not just look good.' },
  { title: 'Transparent communication', text: 'Clear scope, realistic timelines and straight answers about what will deliver value.' },
  { title: 'Accessibility', text: 'Readable, keyboard-friendly experiences with sensible contrast.' },
  { title: 'Responsible delivery', text: 'Careful, well-structured work with attention to detail from start to launch.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Helping businesses make the most of technology</h1>
          <p className="page-hero__lead">
            Traxena Digital is a technology business that helps small businesses, service providers, independent professionals and startups establish a professional digital presence and make practical use of technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <article className="about-card">
            <div className="about-card__content">
              <h2 className="about-card__title">Our purpose</h2>
              <p className="about-card__text">
                Traxena Digital helps service providers and small businesses establish a professional digital presence and make practical use of technology. We focus on Website Design &amp; Digital Solutions that are clear, credible and useful.
              </p>
              <p className="about-card__text">
                We keep the process collaborative and focused. We start by understanding your goals, agree a realistic scope, then design and build with your feedback. Whether you need a first professional website or a focused digital tool, the aim is the same: something useful, credible and easy to use.
              </p>
            </div>
          </article>
          <article className="about-card about-card--pale">
            <div className="about-card__content">
              <h2 className="about-card__title">Values</h2>
              <div className="values-grid">
                {values.map((value) => (
                  <div key={value.title} className="value-item">
                    <h3 className="value-item__title">{value.title}</h3>
                    <p className="value-item__text">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <div className="note-card">
            <div className="note-card__content">
              <h2 className="note-card__title">How we work together</h2>
              <p className="note-card__text">
                Before work begins, we agree the pages, features, deliverables and timeline, so you know what is included and what is not. If a feature isn’t the right fit, we’ll say so and suggest a more practical direction. We don’t guarantee search rankings or business outcomes outside our control — but we do aim to deliver work you can use with confidence.
              </p>
              <div className="note-card__actions">
                <Link to="/contact" className="btn btn--primary">Discuss Your Project</Link>
                <Link to="/services" className="btn btn--ghost btn--xs">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}