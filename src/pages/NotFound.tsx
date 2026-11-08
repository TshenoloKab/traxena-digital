import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__content">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">The page you’re looking for doesn’t exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">Back to Home</Link>
          <Link to="/contact" className="btn btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
