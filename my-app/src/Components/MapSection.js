import React from "react";
import "../Assets/css/MapSection.css"; // 👈 Link your CSS file

const MapSection = ({
  location = "London Eye, London, United Kingdom",
  zoom = 14,
}) => {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&t=m&z=${zoom}&output=embed&iwloc=near`;

  return (
    <section className="map">
      <div className="map-wrapper">
        <iframe
          loading="lazy"
          className="map-frame"
          src={mapSrc}
          title={location}
          aria-label={location}
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
