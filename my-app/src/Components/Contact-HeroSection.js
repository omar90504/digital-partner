import React from "react";
import "../Assets/css/Contact-HeroSection.css"; // your custom CSS

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-container">
        <h2 className="banner-title">Contact Us</h2>
        <nav className="banner-breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">/</span>
          <p className="breadcrumb-current">Contact</p>
        </nav>
      </div>
    </div>
  );
};

export default BannerSection;
