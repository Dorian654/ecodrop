import { useState } from "react";

function ReportActivity() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="report-page">
      <section className="report-intro">
        <p className="section-label">TAKE ACTION</p>

        <h1>Report Recycling Activity</h1>

        <p>
          Tell us about your recycling activity and help us understand
          how people are contributing to cleaner communities.
        </p>
      </section>

      <form className="report-form" onSubmit={handleSubmit}>

        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="For example: Kigali"
          required
        />

        <label>Material Recycled</label>
        <select required>
          <option value="">Select a material</option>
          <option value="Plastic">Plastic</option>
          <option value="Paper">Paper</option>
          <option value="Glass">Glass</option>
          <option value="Metal">Metal</option>
        </select>

        <label>Amount</label>
        <input
          type="text"
          placeholder="For example: 5 bottles"
          required
        />

        <label>Additional Information</label>
        <textarea
          placeholder="Tell us anything else about your recycling activity..."
          rows="5"
        ></textarea>

        <button type="submit">
          Submit Report
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your recycling activity has been reported.
          </p>
        )}

      </form>
    </main>
  );
}

export default ReportActivity;