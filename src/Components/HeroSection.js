import React from "react";
import "../Assets/css/HeroSection.css"; // Reuse same CSS

const BannerSection = ({
  title = "Default Title",
  backgroundImage = "",
  breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Page", link: "#" },
  ],
}) => {
  return (
    <div
      className="banner-section"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`
          : "var(--accent-gradient)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-container">
        <h2 className="banner-title">{title}</h2>

        <nav className="banner-breadcrumb">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? (
                <a href={item.link} className="breadcrumb-link">
                  {item.name}
                </a>
              ) : (
                <p className="breadcrumb-current">{item.name}</p>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="breadcrumb-separator">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BannerSection;
