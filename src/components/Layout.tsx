import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import { applyPageMeta } from '../seo'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const isFirstNavigationRef = useRef(true)

  useEffect(() => {
    applyPageMeta(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    const isFirstNavigation = isFirstNavigationRef.current
    isFirstNavigationRef.current = false

    const targetId = location.hash.replace(/^#/, '')
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'auto' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    } else if (!isFirstNavigation) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    if (!isFirstNavigation) {
      mainRef.current?.focus({ preventScroll: true })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1} ref={mainRef} className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
