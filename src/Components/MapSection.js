import React from "react";
import "../Assets/css/MapSection.css";

const MapSection = ({
  location = "1 todd drive, north haven, CT, 06473, United States",
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
          title={`Map of ${location}`}
          aria-label={`Map showing location of ${location}`}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
