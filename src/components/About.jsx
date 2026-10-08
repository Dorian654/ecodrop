import { Link } from "react-router-dom";
import aboutBg from "../assets/about-bg.jpg";

function About() {
  return (
   <main
  className="about"
  style={{ backgroundImage: `url(${aboutBg})` }}
> 

      <section className="about-intro">
        <p className="section-label">ABOUT ECODROP</p>

        <h1>Making Recycling Easier</h1>

        <p>
          EcoDrop is a platform designed to help people find recycling
          centers, understand recycling, and make better decisions
          about their waste.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make recycling information easier to
            access and encourage people to take responsible action
            toward waste management.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>

          <p>
            We envision communities where recyclable materials are
            properly separated, collected, reused, and recycled.
          </p>
        </div>

      </section>

      <section className="about-values">

        <h2>What EcoDrop Promotes</h2>

        <div className="values-grid">

          <div>
            <h3>♻️ Responsible Recycling</h3>
            <p>
              Helping people understand what can be recycled and
              where they can take it.
            </p>
          </div>

          <div>
            <h3>🌱 Cleaner Communities</h3>
            <p>
              Encouraging better waste management to help create
              cleaner surroundings.
            </p>
          </div>

          <div>
            <h3>📚 Environmental Education</h3>
            <p>
              Providing simple information that helps people learn
              about responsible waste management.
            </p>
          </div>

        </div>

      </section>

      <section className="about-action">

        <h2>Be Part of the Change</h2>

        <p>
          Start by finding a recycling center near you.
        </p>

        <Link to="/centers">
          Find a Recycling Center
        </Link>

      </section>

    </main>
  );
}

export default About;