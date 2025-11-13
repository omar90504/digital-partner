import React from "react";
import "animate.css";
import "../Assets/css/ServicesSection.css";

// ✅ Import service icons
import icon1 from "../Assets/images/Icon-7.png";
import icon2 from "../Assets/images/digital-marketing-icons-F4LJ4W8.png";
import icon3 from "../Assets/images/Icon-8.png";
import icon4 from "../Assets/images/Icon-5.png";
import icon5 from "../Assets/images/Icon-6.png";
import icon6 from "../Assets/images/Icon-4.png";

const ServicesSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Social Media Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      icon: icon2,
      title: "Content Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      icon: icon3,
      title: "PPC Advertising",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      icon: icon4,
      title: "Email Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      icon: icon5,
      title: "Branding & Design",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      icon: icon6,
      title: "Web Development",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
  ];

  return (
    <section className="section services-section">
      <div className="hero-container">
        <div className="services-header animate__animated animate__fadeInDown">
          <div className="sub-heading">
            <i className="fa-regular fa-circle-dot"></i>
            <span>Our Core Services</span>
          </div>
          <h2 className="title-heading">Digital Solutions That Drive Real Results</h2>
        </div>

        {/* === Services Grid === */}
        <div className="card-service-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className="card card-service animate__animated animate__fadeInLeft"
                key={index}
              >
                <div className="service-top">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>{service.title}</h4>
                  </div>
                </div>

                <p>{service.desc}</p>

                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="service-link-footer">
          <p>
            Need a custom solution? Let's create a strategy tailored for your business.{" "}
            <a href="./contact.html">Get a Free Strategy Call</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
