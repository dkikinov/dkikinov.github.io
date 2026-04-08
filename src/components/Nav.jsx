import { Link, useLocation } from "react-router-dom";
import { siteInfo } from "../data/projects";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          {siteInfo.name}
        </Link>
        <ul className="nav-links">
   
          <li>
            <a href={siteInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={siteInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
