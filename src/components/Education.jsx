import { Link } from "react-router-dom";

function Education() {
  return (
    <main className="education">

      <section className="education-intro">
        <p className="section-label">LEARN & TAKE ACTION</p>

        <h1>Learn About Recycling</h1>

        <p>
          Understanding how to manage waste properly is an important
          step toward creating cleaner and healthier communities.
        </p>
      </section>

      <section className="recycling-rules">

        <div className="education-card">
          <span>01</span>
          <h2>Reduce</h2>
          <p>
            Reduce the amount of waste you create by avoiding
            unnecessary products and choosing reusable items.
          </p>
        </div>

        <div className="education-card">
          <span>02</span>
          <h2>Reuse</h2>
          <p>
            Before throwing something away, consider whether it
            can be used again or given to someone else.
          </p>
        </div>

        <div className="education-card">
          <span>03</span>
          <h2>Recycle</h2>
          <p>
            Separate recyclable materials such as plastic, paper,
            glass, and metal so they can be processed again.
          </p>
        </div>

      </section>

      <section className="waste-section">

        <h2>Separate Your Waste</h2>

        <p>
          Proper waste separation makes recycling easier and helps
          recyclable materials avoid unnecessary disposal.
        </p>

        <div className="waste-grid">

          <div>
            <h3>Plastic</h3>
            <p>
              Bottles, containers, and other recyclable plastic items.
            </p>
          </div>

          <div>
            <h3>Paper</h3>
            <p>
              Cardboard, newspapers, and other clean paper products.
            </p>
          </div>

          <div>
            <h3>Glass</h3>
            <p>
              Glass bottles and containers that can be recycled.
            </p>
          </div>

          <div>
            <h3>Metal</h3>
            <p>
              Metal cans and other recyclable metal materials.
            </p>
          </div>

        </div>

      </section>

      <section className="education-action">

        <h2>Ready to Recycle?</h2>

        <p>
          Find a recycling center and see which materials it accepts.
        </p>

        <Link to="/centers">
          Find Recycling Centers
        </Link>

      </section>

    </main>
  );
}

export default Education;