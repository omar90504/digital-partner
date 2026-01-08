import React from "react";
import "../Assets/css/SeoProcess.css";

const steps = [
  {
    title: "Website & Competitor Audit",
    desc: "We analyze your website structure, content quality, internal linking, headings, page speed, and competitor pages to find opportunities for higher rankings and better user experience.",
  },
  {
    title: "On-Page Keyword Research",
    desc: "We research high-value keywords, long-tail search terms, and user intent queries. These keywords are mapped to pages, ensuring each page targets relevant topics and brings qualified traffic.",
  },
  {
    title: "Content Optimization",
    desc: "We optimize existing content with improved headings, keyword placement, FAQs, schema, internal links, and readability to make your pages more useful, relevant, and search-friendly.",
  },
  {
    title: "Meta Tags & Technical SEO",
    desc: "We write optimized meta titles, descriptions, alt tags, and improve URL structure, breadcrumbs, and indexability. This improves click-through rate and helps Google understand your content.",
  },
  {
    title: "On-Page SEO Enhancements",
    desc: "We add internal links, improve page layout, optimize images, implement structured data, and enhance E-E-A-T signals to increase authority and visibility across search results.",
  },
  {
    title: "Tracking, Reporting & Growth",
    desc: "We monitor rankings, traffic, engagement, and conversions. Monthly reports show improvements in page performance, keyword wins, and opportunities for ongoing growth.",
  }
];


const OnPageSeoProcess = () => {
  return (
    <div className="seo-process-section">
      <h2>Our On-Page SEO Process</h2>

<p className="seo-process-subtext">
  A complete on-page SEO strategy designed to improve rankings, fix website issues, and increase traffic, conversions, and user experience.
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

export default OnPageSeoProcess;
