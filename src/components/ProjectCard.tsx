import type { Project } from '../data/projects'
import Button from './Button'
import ProjectPreview from './ProjectPreview'
import './ProjectCard.css'

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`.trim()}>
      <div className="project-card__visual">
        <ProjectPreview name={project.name} src={project.previewImage} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <p className="project-card__category">{project.category}</p>
          {project.conceptLabel ? <span className="project-card__concept">{project.conceptLabel}</span> : null}
        </div>
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__text">{project.description}</p>
        <div className="project-card__action">
          {project.href ? (
            <Button href={project.href} target="_blank" rel="noopener noreferrer" variant="primary" className="btn--sm">
              View Website <span aria-hidden="true">→</span>
            </Button>
          ) : (
            <span className="project-card__status">Preview in progress</span>
          )}
        </div>
      </div>
    </article>
  )
}
