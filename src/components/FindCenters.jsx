import { useState } from "react";
import { Link } from "react-router-dom";

const centers = [
  {
    id: 1,
    name: "EcoDrop Recycling Center",
    location: "Kigali, Rwanda",
    materials: ["Plastic", "Paper", "Glass"],
  },
  {
    id: 2,
    name: "Green Rwanda Center",
    location: "Musanze, Rwanda",
    materials: ["Plastic", "Metal", "Paper"],
  },
  {
    id: 3,
    name: "Clean Future Center",
    location: "Huye, Rwanda",
    materials: ["Plastic", "Glass", "Metal"],
  },
];

function FindCenters() {
  const [search, setSearch] = useState("");
  const [material, setMaterial] = useState("All");

  const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(search.toLowerCase()) ||
      center.location.toLowerCase().includes(search.toLowerCase());

    const matchesMaterial =
      material === "All" || center.materials.includes(material);

    return matchesSearch && matchesMaterial;
  });

  return (
    <main>
      <h1>Find Recycling Centers</h1>

      <p>
        Find a recycling center near you and check what materials they accept.
      </p>

      <input
        type="text"
        placeholder="Search by center or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      >
        <option value="All">All Materials</option>
        <option value="Plastic">Plastic</option>
        <option value="Paper">Paper</option>
        <option value="Glass">Glass</option>
        <option value="Metal">Metal</option>
      </select>

      {filteredCenters.length === 0 ? (
        <p>No recycling centers found.</p>
      ) : (
        filteredCenters.map((center) => (
          <div className="center-card" key={center.id}>
            <h2>{center.name}</h2>

            <p>
              <strong>Location:</strong> {center.location}
            </p>

            <p>
              <strong>Materials:</strong>{" "}
              {center.materials.join(", ")}
            </p>

            <Link to={`/centers/${center.id}`}>
              View Details
            </Link>
          </div>
        ))
      )}
    </main>
  );
}

export default FindCenters;