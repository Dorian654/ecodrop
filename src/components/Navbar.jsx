import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        EcoDrop
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/centers" onClick={closeMenu}>Find Centers</Link>
        <Link to="/education" onClick={closeMenu}>Education</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/report" onClick={closeMenu}>Report Activity</Link>
        <Link to="/reports" onClick={closeMenu}>Reports</Link>
        <Link
          to="/centers"
          className="nav-button"
          onClick={closeMenu}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;