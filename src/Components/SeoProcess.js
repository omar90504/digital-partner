import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "SEO Audit & Consultation",
    desc: "We analyze business goals, target audience, competitors, website health, and build a winning SEO plan.",
  },
  {
    title: "Keyword Research",
    desc: "We find profitable, high-intent keywords that bring real customers and rank faster.",
  },
  {
    title: "Technical Fixes",
    desc: "We fix Core Web Vitals, indexing issues, sitemaps, speed, mobile optimization, schema & more.",
  },
  {
    title: "On-Page Optimization",
    desc: "Titles, meta descriptions, headings, image alt-text, URLs, internal linking & user-intent optimization.",
  },
  {
    title: "Content Strategy",
    desc: "We create blogs, service pages, location pages, FAQs, and authority-building content clusters.",
  },
  
];

const SeoProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our SEO Process</h2>
      <p className="seo-process-subtext">
        A transparent, step-by-step process designed to deliver long-term SEO success.
      </p>

      <div className="timeline-container horizontal-scroll">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item horizontal-column ${index % 2 === 0 ? "bottom" : "top"}`}
          >
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="content-box">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}

        <div className="timeline-line horizontal"></div>
      </div>
    </div>
  );
};

export default SeoProcess;
