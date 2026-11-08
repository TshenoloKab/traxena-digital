import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light'
type ButtonSize = 'default' | 'large'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  to,
  href,
  target,
  rel,
  type = 'button',
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'large' ? 'btn--large' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
