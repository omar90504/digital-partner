import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "Business & Market Audit",
    desc: "We analyze your business goals, target audience, competitors, and current online presence to build a strong digital marketing foundation for the Toronto market.",
  },
  {
    title: "Keyword & Audience Research",
    desc: "We research high-intent keywords, search trends, and audience behavior across Toronto to attract users who are ready to engage, inquire, or buy.",
  },
  {
    title: "Strategy & Campaign Planning",
    desc: "Based on research, we create a customized digital marketing strategy covering SEO, paid ads, content, and social media aligned with your Toronto business objectives.",
  },
  {
    title: "Execution & Optimization",
    desc: "We implement SEO improvements, launch Google Ads and social campaigns, optimize landing pages, and continuously refine performance for better conversions in Toronto.",
  },
  {
    title: "Tracking, Analytics & Reporting",
    desc: "We set up conversion tracking, analytics, and dashboards to measure traffic, leads, sales, and campaign performance for Toronto businesses with complete transparency.",
  },
  {
    title: "Growth & Continuous Improvement",
    desc: "We optimize campaigns monthly, scale what works, and adjust strategies to ensure consistent growth, improved ROI, and long-term success for businesses in Toronto.",
  }
];

const TorontoProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our Digital Marketing Process</h2>
      <p className="seo-process-subtext">
        A proven, step-by-step digital marketing process designed to help Toronto
        businesses grow traffic, leads, conversions, and revenue.
      </p>

      <div className="timeline-container horizontal-scroll">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item horizontal-column ${
              index % 2 === 0 ? "bottom" : "top"
            }`}
          >
            <span className="step-number">
              {String(index + 1).padStart(2, "0")}
            </span>
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

export default TorontoProcess;
