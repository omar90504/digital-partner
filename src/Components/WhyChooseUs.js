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
              Every strategy is built on real-time analytics and performance insights to ensure maximum results for your business.
            </p>
            <a href="/about" className="chooseus-link">
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
              We use fresh ideas and modern marketing techniques to help your brand stand out and stay ahead of the competition.
            </p>
            <a href="/about" className="chooseus-link">
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
              You get clear reports, performance updates, and complete visibility into your ROI—no hidden details, ever.

            </p>
            <a href="/about" className="chooseus-link">
              Read More <i className="fa-solid fa-arrow-circle-right"></i>
            </a>
          </div>
          </div>
        </div>

        {/* === Right Column === */}
        <div className="chooseus-right">
          <div className="chooseus-header">
            <span className="chooseus-subtitle">
              <i className="fa-regular fa-circle-dot"></i> Why Choose Digital Partner</span>
            <h2>Your Growth Is Our Mission</h2>
            <p>
              Choosing the right digital marketing partner makes all the difference. At Digital Partner, we craft strategies that deliver measurable success, not just campaigns.</p>
          </div>

          <div className="chooseus-image">
            <img src={WhyChooseImg} alt="Why Choose Us" />
            <div className="chooseus-cta">
              <h5>Partner with Digital Partner & take your brand to the next level.</h5>
              <a href="./contact" className="chooseus-cta-link">
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
