import React, { useEffect } from "react";
import "../Assets/css/ExpertiseSection.css";
import ExpertiseImage from "../Assets/images/dummy.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";

const ExpertiseSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText.replace("+", "") || 0;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-wrapper">
          {/* Left Image Section */}
          <div className="expertise-image-block">
            <div className="expertise-image-box">
              <img
                src={ExpertiseImage}
                alt="Expertise"
                className="expertise-image animate__animated animate__fadeInUp"
              />
              <div className="expertise-floating-card animate__animated animate__fadeInDown">
                <h4>Better Strategy. Better Performance. Better Growth.</h4>
                <p>At Digital Partner, we create smart online marketing strategies that help your business grow fast.
                 Our team focuses on measurable results, powerful branding, and long-lasting digital success.Whether you need more traffic, more leads, or stronger brand visibility — we help you achieve it.</p>
                <div className="expertise-link">
                  <a href="./contact.html">Get Free Consultation</a>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="expertise-content">
            <div className="expertise-subtitle animate__animated animate__fadeInRight">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Our Expertise</span>
            </div>

            <h2 className="expertise-heading animate__animated animate__fadeInRight">
              Data-Driven Strategies, Real Results
            </h2>

            <p className="expertise-description">
              We create plans based on analytics, trends, and proven methods to help your business stay ahead.
            </p>

            <div className="expertise-bottom">
              <div className="expertise-list">
                <h5>What We Do Best</h5>
                <ul>
                  <li> Performance Marketing </li>
                  <li> Social Media Growth </li>
                  <li> Content Marketing </li>
                  <li> PPC & Paid Ads </li>
                  <li> Brand Strategy </li>
                  <li> Conversion Optimization </li>
                </ul>
              </div>

              <div className="expertise-counter-card animate__animated animate__fadeInUp">
                <div className="counter-row">
                  <span className="counter" data-target="21"></span>
                  <span className="counter-detail">+</span>
                  <h6>Years of Digital Marketing Experience</h6>
                </div>
                <p>
                  We help businesses grow through targeted strategies, smart advertising, and proven digital marketing methods that deliver real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
