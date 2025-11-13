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
                <h4>Ready to Elevate Your Digital Presence?</h4>
                <p>Let's create a custom strategy that fits your business goals.</p>
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
              Data Driven Strategies, Measurable Results
            </h2>

            <p className="expertise-description">
              At Marko, we specialize in crafting innovative digital marketing
              strategies that drive real business growth. Our expertise ensures
              your brand stays ahead in the competitive digital landscape.
            </p>

            <div className="expertise-bottom">
              <div className="expertise-list">
                <h5>What We Do Best</h5>
                <ul>
                  <li><a href="./single_services.html">Performance Marketing</a></li>
                  <li><a href="./single_services.html">Social Media Growth</a></li>
                  <li><a href="./single_services.html">Content Marketing</a></li>
                  <li><a href="./single_services.html">PPC & Paid Ads</a></li>
                  <li><a href="./single_services.html">Brand Strategy</a></li>
                  <li><a href="./single_services.html">Conversion Optimization</a></li>
                </ul>
              </div>

              <div className="expertise-counter-card animate__animated animate__fadeInUp">
                <div className="counter-row">
                  <span className="counter" data-target="21"></span>
                  <span className="counter-detail">+</span>
                  <h6>Years of Experience on Digital Marketing Services</h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit in ex
                  ligula varius at rutrum et finibus sed felis qisque.
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
