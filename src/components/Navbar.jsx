import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        EcoDrop
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/centers">Find Centers</Link>
        <Link to="/education">Education</Link>
        <Link to="/about">About</Link>
        <Link to="/report">Report Activity</Link>
        <Link to="/reports">Reports</Link>

        <Link to="/centers" className="nav-button">
          Get Started
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;