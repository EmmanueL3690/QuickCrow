import React from "react";
import "../styles/ExploreByLocation.css";
import { MapPin } from "lucide-react";

const lagosImg = "/assets/lagos.jpg";
const abujaImg = "/assets/abuja.jpg";
const kanoImg = "/assets/kano.jpg";
const portHarcourtImg = "/assets/portharcourt.jpg";
const ibadanImg = "/assets/ibadan.jpg";
const beninCityImg = "/assets/benincity.jpg";

const locations = [
  { name: "Lagos", image: lagosImg },
  { name: "Abuja", image: abujaImg },
  { name: "Kano", image: kanoImg },
  { name: "Port Harcourt", image: portHarcourtImg },
  { name: "Ibadan", image: ibadanImg },
  { name: "Benin City", image: beninCityImg },
];

const ExploreByLocation = () => {
  return (
    <section className="explore-section">
      <h2 className="explore-title">Explore by Location</h2>
      <div className="location-grid">
        {locations.map((loc) => (
          <div className="location-card" key={loc.name}>
            <img src={loc.image} alt={loc.name} className="location-image" />
            <div className="location-info">
              <span className="location-name">{loc.name}</span>
              <MapPin className="location-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreByLocation;

