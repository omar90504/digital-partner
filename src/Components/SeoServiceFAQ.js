import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/SEOService1.webp";

const faqData = [
  {
    question: "Q1: How long does SEO take to show results in Canada?",
    answer:
      "Typically 3–6 months depending on your industry, competition in Canadian search results, and the current state of your website.",
  },
  {
    question: "Q2: Do you guarantee top Google rankings in Canada?",
    answer:
      "While no agency can guarantee rankings on Google, we use proven, data-driven strategies to achieve faster and sustainable results across Canadian markets.",
  },
  {
    question: "Q3: What is included in your monthly SEO services?",
    answer:
      "Our monthly SEO package for Canadian businesses includes SEO audits, on-page optimization, technical SEO fixes, content creation, backlink building, and detailed reporting.",
  },
  {
    question: "Q4: Do you work with small local businesses in Canada?",
    answer:
      "Absolutely! Helping small and medium Canadian businesses grow through local SEO, Google Business Profile optimization, and region-specific strategies is our specialty.",
  },
  {
    question: "Q5: Can you optimize my website for multiple Canadian cities?",
    answer:
      "Yes, we create city-specific pages, local content, and optimize for multiple service areas so your business appears in local search results across Canada.",
  },
];

const SeoServiceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="SEO FAQ Illustration" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">Frequently Asked Questions About SEO in Canada</h2>
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

export default SeoServiceFAQ;
