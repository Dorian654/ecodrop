import { Link } from "react-router-dom";
import heroImage from "../assets/ecodrop-hero.jpg";

function Home() {
  return (
    <main className="home">

     <section
  className="hero"
  style={{ backgroundImage: `url(${heroImage})` }}
  >
        <p className="hero-small">
          A CLEANER COMMUNITY STARTS WITH YOU
        </p>

        <h1>
          Recycle Today for a Greener Tomorrow
        </h1>

        <p className="hero-text">
          EcoDrop helps you find recycling centers, learn about
          recycling, and make better choices for our environment.
        </p>

        <div className="hero-buttons">
          <Link to="/centers">
            Find Recycling Centers
          </Link>

          <Link to="/education">
            Learn About Recycling
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>3+</h2>
          <p>Recycling Centers</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Material Types</p>
        </div>

        <div className="stat-card">
          <h2>1</h2>
          <p>Cleaner Goal</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How EcoDrop Works</h2>

        <p>
          Getting started with recycling can be simple.
        </p>

        <div className="steps">

          <div className="step-card">
            <h3>01. Find a Center</h3>
            <p>
              Search for a recycling center and see where it is located.
            </p>
          </div>

          <div className="step-card">
            <h3>02. Check Materials</h3>
            <p>
              Find out which recyclable materials the center accepts.
            </p>
          </div>

          <div className="step-card">
            <h3>03. Recycle</h3>
            <p>
              Take your recyclable materials to the right center.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;