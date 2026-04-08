export default function WireframeShapes() {
  return (
    <div className="hero-shapes">
      {/* Cube */}
      <svg className="hero-shape-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,20 70,20 70,60 30,60" />
        <polygon points="40,10 80,10 80,50 40,50" />
        <line x1="30" y1="20" x2="40" y2="10" />
        <line x1="70" y1="20" x2="80" y2="10" />
        <line x1="70" y1="60" x2="80" y2="50" />
        <line x1="30" y1="60" x2="40" y2="50" />
      </svg>

      {/* Octahedron */}
      <svg className="hero-shape-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 85,50 50,90 15,50" />
        <line x1="15" y1="50" x2="85" y2="50" />
        <line x1="50" y1="10" x2="50" y2="90" />
      </svg>

      {/* Icosahedron-like */}
      <svg className="hero-shape-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,8 92,35 75,85 25,85 8,35" />
        <polygon points="50,25 78,42 68,75 32,75 22,42" />
        <line x1="50" y1="8" x2="50" y2="25" />
        <line x1="92" y1="35" x2="78" y2="42" />
        <line x1="75" y1="85" x2="68" y2="75" />
        <line x1="25" y1="85" x2="32" y2="75" />
        <line x1="8" y1="35" x2="22" y2="42" />
      </svg>

      {/* Tetrahedron */}
      <svg className="hero-shape-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 85,80 15,80" />
        <line x1="50" y1="15" x2="55" y2="55" />
        <line x1="85" y1="80" x2="55" y2="55" />
        <line x1="15" y1="80" x2="55" y2="55" />
      </svg>

      {/* Diamond / double pyramid */}
      <svg className="hero-shape-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 80,50 50,90 20,50" />
        <line x1="20" y1="50" x2="80" y2="50" />
      </svg>
    </div>
  );
}
