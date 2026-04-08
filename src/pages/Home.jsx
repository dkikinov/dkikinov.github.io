import { siteInfo, skills, projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import WireframeShapes from "../components/WireframeShapes";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <WireframeShapes />
        <div className="container hero-content">
          <div className="hero-label">Software Developer</div>
          <h1>{siteInfo.name}</h1>
          <p className="hero-bio">{siteInfo.bio}</p>
          <div className="hero-links">
            <a className="hero-link" href={siteInfo.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="hero-link" href={siteInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      <div className="gradient-divider" />

      {/* Skills
      <section className="section" id="skills">
        <div className="container">
          <div className="section-label">Tech Stack</div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-label">Projects</div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
