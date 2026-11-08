import './ProjectPreview.css'

type ProjectPreviewProps = {
  name: string
  src?: string
}

export default function ProjectPreview({ name, src }: ProjectPreviewProps) {
  if (src) {
    return (
      <img
        className="project-preview__image"
        src={src}
        alt={`${name} website preview`}
        loading="eager"
      />
    )
  }

  return (
    <div className="project-preview__placeholder" role="img" aria-label={`${name} concept preview`}>
      <span className="project-preview__placeholder-label">Concept preview</span>
      <strong className="project-preview__placeholder-name">{name}</strong>
    </div>
  )
}
