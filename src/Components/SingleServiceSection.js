import React from "react";
import "../Assets/css/SingleService.css";
import serviceImg1 from "../Assets/images/ecommerce.webp";
import serviceImg2 from "../Assets/images/Background video.png";

const SingleService = () => {
  return (
    <section className="service">
      <div className="service-container">
        {/* === Hero Image Section === */}
        <div className="service-hero">
          <img src={serviceImg1} alt="Service" className="service-hero-img" />
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-sub">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Expertise</span>
              </div>
              <h2 className="service-title">
                Boost Your Brand with Strategic Social Media Marketing
              </h2>
              <p className="service-desc">
                Maximize engagement, build loyal communities, and drive conversions across all major platforms. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>

        {/* === Content Section === */}
        <div className="service-content">
          <div className="service-main">
            <h3 className="section-heading">Overview</h3>
            <p className="section-text">
              At Marko, we help brands grow through custom-tailored social media marketing strategies that connect with your audience. From content creation to campaign optimization, we make sure your presence on platforms like Instagram, Facebook, LinkedIn, and TikTok stands out. Whether you’re launching a new brand or scaling an existing one, our experts turn social media into a powerful growth engine.
            </p>

            {/* === Image Row === */}
            <div className="service-images">
              <img src={serviceImg1} alt="Service" className="service-img" />
            </div>

            {/* === What's Included === */}
            <div className="service-card">
              <h4 className="card-title">What's Included</h4>
              <div className="card-underline"></div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.
              </p>
              <div className="service-lists">
                <ul className="service-list">
                  <li>Platform Strategy & Planning</li>
                  <li>Creative Content Production</li>
                  <li>Paid Ads Management</li>
                  <li>Community Engagement</li>
                </ul>
                <ul className="service-list">
                  <li>Performance Reporting & Analytics</li>
                  <li>Influencer Collaborations</li>
                  <li>Social Listening & Trend Monitoring</li>
                </ul>
              </div>
            </div>

            {/* === Why Choose Us === */}
            <h4 className="section-heading">Why Choose Marko for Social Media Marketing?</h4>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.
            </p>

            <div className="service-benefits">
              <div className="benefit-col">
                <div className="benefit-item">
                  <i className="fa-regular fa-circle-check accent"></i>
                  <div>
                    <h5>Result-Driven Campaigns</h5>
                    <p>Focused on reach, engagement, and ROI</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fa-regular fa-circle-check accent"></i>
                  <div>
                    <h5>Dedicated Team</h5>
                    <p>Experts in every platform you use</p>
                  </div>
                </div>
              </div>

              <div className="benefit-col">
                <div className="benefit-item">
                  <i className="fa-regular fa-circle-check accent"></i>
                  <div>
                    <h5>Tailored Strategies</h5>
                    <p>No one-size-fits-all, we build for your brand</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fa-regular fa-circle-check accent"></i>
                  <div>
                    <h5>Analytics & Insights</h5>
                    <p>Make smart decisions with real data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Sidebar === */}
          <aside className="service-sidebar">
            <div className="sidebar-card">
              <h4>Recent Services</h4>
              <div className="card-underline"></div>
              <ul className="sidebar-list">
                <li><a href="#">Social Media Marketing</a></li>
                <li><a href="#">Content Marketing</a></li>
                <li><a href="#">PPC Advertising</a></li>
                <li><a href="#">Email Marketing</a></li>
                <li><a href="#">Branding & Design</a></li>
                <li><a href="#">Web Development</a></li>
              </ul>
            </div>

            <div className="sidebar-cta">
              <h3>Transform Your Business with Marko!</h3>
              <p>Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!</p>
              <a href="#" className="cta-link">
                Read More <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
