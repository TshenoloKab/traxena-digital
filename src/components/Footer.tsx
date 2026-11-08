import { Link } from 'react-router-dom'
import logo from '/traxena-logo.png'
import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Traxena Digital logo" width="624" height="561" />
            <div>
              <p className="footer__name">Traxena Digital</p>
              <p className="footer__tagline">Build. Innovate. Grow.</p>
            </div>
          </Link>
        </div>
        <div>
          <h2 className="footer__heading">Pages</h2>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__list">
            <li><a href="mailto:traxenadigital@gmail.com">traxenadigital@gmail.com</a></li>
            <li><Link to="/contact">Discuss a Project</Link></li>
            <li><Link to="/services">Explore Services</Link></li>
            <li><Link to="/work">View Work &amp; Approach</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {currentYear} Traxena Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
