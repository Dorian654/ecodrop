import { Link, useParams } from "react-router-dom";

const centers = {
  1: {
    name: "EcoDrop Recycling Center",
    location: "Kigali, Rwanda",
    materials: "Plastic, Paper, Glass",
    hours: "Monday - Saturday: 8:00 AM - 5:00 PM",
    phone: "+250 788 000 001",
  },

  2: {
    name: "Green Rwanda Center",
    location: "Musanze, Rwanda",
    materials: "Plastic, Metal, Paper",
    hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    phone: "+250 788 000 002",
  },

  3: {
    name: "Clean Future Center",
    location: "Huye, Rwanda",
    materials: "Plastic, Glass, Metal",
    hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
    phone: "+250 788 000 003",
  },
};

function CenterDetails() {
  const { id } = useParams();

  const center = centers[id];

  if (!center) {
    return (
      <main>
        <h1>Center Not Found</h1>

        <p>
          Sorry, we could not find that recycling center.
        </p>

        <Link to="/centers">Back to Centers</Link>
      </main>
    );
  }

  return (
    <main>
      <div className="details-card">
        <h1>{center.name}</h1>

        <p>
          Here is some useful information about this recycling center.
        </p>

        <div className="detail-section">
          <h3>📍 Location</h3>
          <p>{center.location}</p>
        </div>

        <div className="detail-section">
          <h3>♻️ Materials Accepted</h3>
          <p>{center.materials}</p>
        </div>

        <div className="detail-section">
          <h3>🕒 Opening Hours</h3>
          <p>{center.hours}</p>
        </div>

        <div className="detail-section">
          <h3>📞 Contact</h3>
          <p>{center.phone}</p>
        </div>

        <div className="details-buttons">
          <button>Get Directions</button>

          <Link to="/centers">
            Back to Centers
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CenterDetails;