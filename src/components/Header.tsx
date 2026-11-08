import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '/traxena-logo.png'
import ThemeToggle from './ThemeToggle'
import './Header.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Traxena Digital home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Traxena Digital logo" width="624" height="561" />
        </Link>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>
        <nav id="primary-nav" className={`header__nav ${open ? 'header__nav--open' : ''}`} aria-label="Primary">
          <ul className="header__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary header__cta" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
