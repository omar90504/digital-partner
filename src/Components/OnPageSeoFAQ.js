import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/onpage seo10.webp";

const faqData = [
  {
    question: "Q1: How long does On-Page SEO take to show results?",
    answer:
      "Most websites start seeing improvements within 30–60 days. Rankings improve as content, meta tags, page structure, internal links, and technical elements are optimized. Full results continue to grow over the next few months."
  },
  {
    question: "Q2: Can On-Page SEO alone rank my website?",
    answer:
      "On-Page SEO is the foundation. It improves content quality, structure, indexing, user experience, and crawlability. For competitive industries, combining On-Page SEO with backlinks and content marketing gives the best long-term results."
  },
  {
    question: "Q3: What is included in your On-Page SEO service?",
    answer:
      "Our On-Page SEO includes keyword research, content optimization, internal linking, meta tags, headings, schema markup, image optimization, page experience fixes, and UX enhancements for stronger search performance."
  },
  {
    question: "Q4: Do you optimize existing pages or create new pages?",
    answer:
      "We do both. Existing pages are rebuilt to improve ranking potential. If keyword gaps exist, we create new high-quality landing pages such as service pages, blog posts, product category pages, and FAQs."
  },
  {
    question: "Q5: How do you measure On-Page SEO success?",
    answer:
      "We track keyword rankings, impressions, traffic, click-through rate, bounce rate, user engagement, and conversions. Our reports clearly show SEO improvements and growth month-to-month."
  },
  {
    question: "Q6: Will On-Page SEO improve my website speed?",
    answer:
      "Yes, page speed is a major ranking factor. We optimize images, remove unused scripts, improve caching, fix Core Web Vitals, and enhance mobile performance to deliver a faster website."
  }
];


const OnPageSeoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="On-Page SEO Frequently Asked Questions" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">On-Page SEO FAQ</h2>
          <div className="seo-faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`seo-faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="seo-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span className="seo-faq-icon">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div className="seo-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnPageSeoFAQ;
