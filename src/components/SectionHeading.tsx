type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  id?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </div>
  )
}
