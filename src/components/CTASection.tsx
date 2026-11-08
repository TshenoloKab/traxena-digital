import Button from './Button'
import './CTASection.css'

type CTASectionProps = {
  title: string
  text: string
  buttonLabel?: string
  to?: string
  eyebrow?: string
}

export default function CTASection({
  title,
  text,
  buttonLabel = 'Discuss Your Project',
  to = '/contact',
  eyebrow,
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__copy">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="cta-panel__title">{title}</h2>
            <p className="cta-panel__text">{text}</p>
          </div>
          <div className="cta-panel__action">
            <Button to={to} variant="primary" size="large">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
