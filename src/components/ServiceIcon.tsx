import type { ServiceIcon as ServiceIconName } from '../data/services'

export default function ServiceIcon({ name }: { name: ServiceIconName }) {
  if (name === 'landing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path d="M3.5 8.5h17M8 12h8M8 15.5h5" />
      </svg>
    )
  }

  if (name === 'tools') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.7 6.3a4.2 4.2 0 0 0-5.4 5.4L4.6 16.4a2 2 0 1 0 2.8 2.8l4.7-4.7a4.2 4.2 0 0 0 5.4-5.4l-2.4 2.4-3-3 2.6-2.2Z" />
        <path d="m17.5 14.5 2 2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9h17M8 13h3M8 16h6" />
      <path d="M16.5 13.5h1.5" />
    </svg>
  )
}
