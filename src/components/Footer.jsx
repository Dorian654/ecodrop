import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-about">
          <h2>EcoDrop</h2>

          <p>
            Making recycling easier and helping communities
            build a cleaner environment.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/centers">Find Centers</Link>
          <Link to="/education">Education</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Rwanda</p>
          <p>Email: info@ecodrop.rw</p>
          <p>Phone: +250 788 000 000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 EcoDrop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;