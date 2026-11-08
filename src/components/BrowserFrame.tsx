import type { ReactNode } from 'react'
import './BrowserFrame.css'

type BrowserFrameProps = {
  children: ReactNode
  label?: string
  className?: string
}

export default function BrowserFrame({ children, label = 'traxenadigital.com', className = '' }: BrowserFrameProps) {
  return (
    <div className={`browser-frame ${className}`.trim()}>
      <div className="browser-frame__bar" aria-hidden="true">
        <span className="browser-frame__dots">
          <span />
          <span />
          <span />
        </span>
        <span className="browser-frame__address">{label}</span>
      </div>
      <div className="browser-frame__screen">{children}</div>
    </div>
  )
}
