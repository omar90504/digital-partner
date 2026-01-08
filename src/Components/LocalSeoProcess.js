import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "Local SEO & Competitor Audit",
    desc: "We analyze your Google Business Profile, local competitors, citations, and website to build a strategy that improves local visibility and rankings.",
  },
  {
    title: "Local Keyword Research",
    desc: "We identify high-intent local keywords such as 'near me', city-based searches, and industry terms that drive phone calls, walk-ins, and inquiries.",
  },
  {
    title: "Google Business Profile Optimization",
    desc: "We optimize your GBP listing with categories, services, photos, posts, products, reviews, messaging, and tracking to increase calls and map rankings.",
  },
  {
    title: "Local On-Page Optimization",
    desc: "We create location pages, service area content, optimized meta tags, local schema, and strong internal linking to improve search visibility.",
  },
  {
    title: "Citations, NAP & Reviews",
    desc: "We build local citations, fix NAP consistency, encourage customer reviews, and boost authority across top local directories and industry platforms.",
  },
  {
    title: "Monitoring, Reporting & Growth",
    desc: "Monthly reports show results from calls, direction requests, website visits, map rankings, and keyword improvements to ensure ongoing growth.",
  }
];

const LocalSeoProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our Local SEO Process</h2>
      <p className="seo-process-subtext">
        A proven, step-by-step Local SEO system designed to improve Google Maps visibility, increase calls, and grow your local business.
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

export default LocalSeoProcess;
