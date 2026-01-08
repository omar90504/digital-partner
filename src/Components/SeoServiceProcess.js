import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "SEO Audit & Consultation",
    desc: "We analyze your business goals, target audience in Canada, competitors, website health, and create a custom SEO strategy to dominate Canadian search results.",
  },
  {
    title: "Keyword Research for Canada",
    desc: "We identify high-intent, profitable keywords specific to Canadian users and regions to drive qualified traffic and faster rankings.",
  },
  {
    title: "Technical SEO Fixes",
    desc: "We resolve Core Web Vitals issues, indexing errors, sitemaps, page speed, mobile optimization, and structured data tailored for Canadian search engines.",
  },
  {
    title: "On-Page Optimization",
    desc: "We optimize titles, meta descriptions, headings, image alt-text, URLs, internal linking, and content structure to match Canadian user intent.",
  },
  {
    title: "Content & Local Strategy",
    desc: "We create SEO-rich blogs, service pages, city/region pages, FAQs, and authority content clusters to increase visibility across Canada.",
  },
];

const SeoServiceProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our SEO Process for Canadian Businesses</h2>
      <p className="seo-process-subtext">
        A transparent, step-by-step process designed to deliver long-term SEO success across Canada.
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

export default SeoServiceProcess;
