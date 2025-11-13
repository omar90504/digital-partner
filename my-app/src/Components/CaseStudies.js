import React from "react";
import "../Assets/css/caseStudies.css";

// === Import local images ===
import localImg from "../Assets/images/local.webp";
import saasImg from "../Assets/images/saas.webp";
import ecommerceImg from "../Assets/images/ecommerce.webp";
import startupImg from "../Assets/images/startup.webp";

export default function CaseStudies() {
  return (
    <section className="case-section">
      <div className="case-container">
        {/* Header */}
        <div className="case-header">
          <div>
            <div className="case-sub">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Case Studies</span>
            </div>
            <h2 className="case-title">
              See How We Help <br /> Businesses Thrive
            </h2>
          </div>
          <div className="case-right">
            <p>
              We don't just talk about results — we deliver them. Here are some
              of our most impactful case studies showcasing how our digital
              marketing strategies drive success.
            </p>
            <a href="#" className="case-link">
              More Case Studies <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Case Cards */}
        <div className="case-grid">
          {/* 1 */}
          <div className="case-card" >
            <div
              className="case-img"
              style={{ backgroundImage: `url(${localImg})` }}
            ></div>
            <div className="case-overlay">
              <div className="case-tags">
                {[
                  "Social",
                  "Influencer",
                  "Retargeting",
                  "Google",
                  "Video",
                  "Local",
                  "Community",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h4>Local Business Digital Transformation</h4>
              <p>
                5× ROI on social media campaigns & 80% increase in engagement.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="case-card">
            <div
              className="case-img"
              style={{ backgroundImage: `url(${saasImg})` }}
            ></div>
            <div className="case-overlay">
              <div className="case-tags">
                {[
                  "Content",
                  "LinkedIn Ads",
                  "Email",
                  "Webinar",
                  "Landing",
                  "CRM",
                  "Retargeting",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h4>SaaS Lead Generation Success</h4>
              <p>
                150% increase in qualified leads & 70% lower customer
                acquisition cost.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="case-card">
            <div
              className="case-img"
              style={{ backgroundImage: `url(${ecommerceImg})` }}
            ></div>
            <div className="case-overlay">
              <div className="case-tags">
                {[
                  "SEO",
                  "PPC Ads",
                  "CRO",
                  "Analytics",
                  "Influencer",
                  "A/B Testing",
                  "Email",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h4>E-Commerce Growth Boost</h4>
              <p>
                3× increase in organic traffic & 2× revenue growth in 6 months.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="case-card">
            <div
              className="case-img"
              style={{ backgroundImage: `url(${startupImg})` }}
            ></div>
            <div className="case-overlay">
              <div className="case-tags">
                {[
                  "Viral",
                  "Partnership",
                  "PR",
                  "Growth",
                  "UGC",
                  "Media",
                  "Branding",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h4>Startup Brand Awareness Expansion</h4>
              <p>
                200% increase in brand mentions & 60% higher engagement rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
