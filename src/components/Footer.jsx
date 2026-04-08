import { siteInfo } from "../data/projects";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href={siteInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteInfo.researchGate} target="_blank" rel="noreferrer">ResearchGate</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {siteInfo.name}</p>
      </div>
    </footer>
  );
}
