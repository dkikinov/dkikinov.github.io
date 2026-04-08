import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          ← back to home
        </Link>

        <h1>{project.title}</h1>
        <div className="subtitle">{project.subtitle}</div>

        <div className="project-detail-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-description">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {project.github && (
          <a
            className="project-github-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            ↗ View Source on GitHub
          </a>
        )}

        {project.images.length > 0 && (
          <div className="project-images">
            {project.images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
