import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "Comprehensive SEO Audit",
    desc: "We conduct a deep analysis of your website, competitors, market, and business goals to create a customized SEO roadmap for maximum results.",
  },
  {
    title: "Advanced Keyword Research",
    desc: "Identify high-value, high-intent keywords that attract qualified traffic and drive conversions, tailored specifically to your industry and region.",
  },
  {
    title: "Technical SEO Optimization",
    desc: "We fix site architecture, Core Web Vitals, indexing issues, mobile performance, structured data, and other technical elements that impact rankings.",
  },
  {
    title: "On-Page SEO Excellence",
    desc: "Optimize titles, meta descriptions, headings, URLs, internal linking, and content structure to align with search intent and maximize visibility.",
  },
  {
    title: "Content Strategy & Authority Building",
    desc: "We develop SEO-focused blogs, landing pages, service pages, and location pages, creating topical clusters that establish authority and drive traffic.",
  },
  {
    title: "Continuous Monitoring & Reporting",
    desc: "Track SEO performance, analyze traffic, keyword rankings, and user engagement with detailed monthly reports to ensure ongoing growth and ROI.",
  }
];

const ProfessionalProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our Professional SEO Process</h2>
      <p className="seo-process-subtext">
        A structured, transparent, and result-driven SEO process designed to help businesses dominate search results and grow online.
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

export default ProfessionalProcess;
