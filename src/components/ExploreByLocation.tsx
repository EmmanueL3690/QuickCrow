import React from "react";
import "../styles/ExploreByLocation.css";
import { MapPin } from "lucide-react";

import lagosImg from "../assets/lagos.jpg";
import abujaImg from "../assets/abuja.jpg";
import kanoImg from "../assets/kano.jpg";
import portHarcourtImg from "../assets/portharcourt.jpg";
import ibadanImg from "../assets/Ibadan.jpg";
import beninCityImg from "../assets/benincity.jpg";

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

