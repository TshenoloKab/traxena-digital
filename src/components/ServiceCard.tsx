import { Link } from 'react-router-dom'
import type { Service } from '../data/services'
import ServiceIcon from './ServiceIcon'
import './ServiceCard.css'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <span className="service-card__icon">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{service.homeDescription}</p>
      <Link className="text-link" to={`/services#${service.slug}`}>
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
