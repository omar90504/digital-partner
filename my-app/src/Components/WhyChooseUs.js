import React from "react";
import "../Assets/css/WhyChooseUs.css";

// ✅ Import images properly from Assets folder
import Icon2 from "../Assets/images/Icon-2.png";
import Icon1 from "../Assets/images/Icon-1.png";
import Icon3 from "../Assets/images/Icon-3.png";
import WhyChooseImg from "../Assets/images/whychooseus.webp";

const WhyChooseUs = () => {
  return (
    <section className="chooseus-section">
      <div className="chooseus-container">
        {/* === Left Column === */}
        <div className="chooseus-left">
          <div className="chooseus-card">
            <div className="chooseus-icon-box">
              <img src={Icon2} alt="Data-Driven" />
            </div>
            <div>
            <h4>Data-Driven Approach</h4>
            <p>
              Every decision is backed by real-time analytics for maximum
              impact lorem ipsum dolor sit consectetur adipiscing elit ut elit
              tellus luctus nec.
            </p>
            <a href="#" className="chooseus-link">
              Read More <i className="fa-solid fa-arrow-circle-right"></i>
            </a>
          </div>
</div>
          <div className="chooseus-card">
            <div className="chooseus-icon-box">
              <img src={Icon1} alt="Creative" />
            </div>
            <div>
            <h4>Creative & Innovative</h4>
            <p>
              Cutting-edge marketing techniques to keep you ahead of the
              competition lorem ipsum dolor sit awsa consectetur adipiscing
              elit ut elit.
            </p>
            <a href="#" className="chooseus-link">
              Read More <i className="fa-solid fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
          <div className="chooseus-card">
            <div className="chooseus-icon-box">
              <img src={Icon3} alt="Transparent Reporting" />
            </div>
            <div>
            <h4>Transparent Reporting</h4>
            <p>
              Clear insights and performance tracking, so you always know your
              ROI lorem ipsum dolo consectetur adipiscing elit ut elit tellus
              luctus nec.
            </p>
            <a href="#" className="chooseus-link">
              Read More <i className="fa-solid fa-arrow-circle-right"></i>
            </a>
          </div>
          </div>
        </div>

        {/* === Right Column === */}
        <div className="chooseus-right">
          <div className="chooseus-header">
            <span className="chooseus-subtitle">
              <i className="fa-regular fa-circle-dot"></i> Why Choose Marko
            </span>
            <h2>Your Success is Our Mission</h2>
            <p>
              In the fast-paced digital world, choosing the right marketing
              partner makes all the difference. At Marko, we don’t just create
              campaigns—we craft strategies that deliver measurable success.
            </p>
          </div>

          <div className="chooseus-image">
            <img src={WhyChooseImg} alt="Why Choose Us" />
            <div className="chooseus-cta">
              <h5>Partner with Marko & take your brand to the next level.</h5>
              <a href="./contact.html" className="chooseus-cta-link">
                Let’s Talk Strategy{" "}
                <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
