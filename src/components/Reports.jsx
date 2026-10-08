import { Link } from "react-router-dom";

const reports = [
  {
    id: 1,
    location: "Kigali",
    material: "Plastic",
    amount: "5 bottles",
    date: "October 5, 2026",
  },
  {
    id: 2,
    location: "Musanze",
    material: "Paper",
    amount: "2 kg",
    date: "October 4, 2026",
  },
  {
    id: 3,
    location: "Huye",
    material: "Glass",
    amount: "8 bottles",
    date: "October 2, 2026",
  },
];

function Reports() {
  return (
    <main className="reports-page">

      <section className="reports-intro">
        <p className="section-label">COMMUNITY ACTIVITY</p>

        <h1>Recycling Reports</h1>

        <p>
          See examples of recycling activity from the EcoDrop community.
        </p>
      </section>

      <section className="reports-summary">

        <div className="report-summary-card">
          <h2>3</h2>
          <p>Reports</p>
        </div>

        <div className="report-summary-card">
          <h2>3</h2>
          <p>Locations</p>
        </div>

        <div className="report-summary-card">
          <h2>3</h2>
          <p>Materials</p>
        </div>

      </section>

      <section className="reports-list">

        <h2>Recent Recycling Activity</h2>

        {reports.map((report) => (
          <div className="report-card" key={report.id}>

            <div>
              <h3>{report.material}</h3>
              <p>
                <strong>Location:</strong> {report.location}
              </p>
              <p>
                <strong>Amount:</strong> {report.amount}
              </p>
            </div>

            <p className="report-date">
              {report.date}
            </p>

          </div>
        ))}

      </section>

      <section className="reports-action">

        <h2>Have you recycled recently?</h2>

        <p>
          Share your recycling activity with the EcoDrop community.
        </p>

        <Link to="/report">
          Report Activity
        </Link>

      </section>

    </main>
  );
}

export default Reports;