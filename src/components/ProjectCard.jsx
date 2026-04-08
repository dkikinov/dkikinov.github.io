import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      {project.images.length > 0 ? (
        <img
          className="project-card-image"
          src={project.images[0].src}
          alt={project.images[0].alt}
          loading="lazy"
        />
      ) : (
        <div className="project-card-noimage">{"{ }"}</div>
      )}
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <div className="subtitle">{project.subtitle}</div>
        <p>{project.summary}</p>
      </div>
      <div className="project-card-tech">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Link>
  );
}
