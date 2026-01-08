import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/seo-faq.jpg";

const faqData = [
  {
    question: "Q1: How long does SEO take to show results?",
    answer: "Normally 3–6 months depending on competition."
  },
  {
    question: "Q2: Do you guarantee rankings?",
    answer: "Google par koi guarantee nahi hoti, but hum proven strategies se fast results deliver karte hain."
  },
  {
    question: "Q3: What is included in your monthly SEO services?",
    answer: "Audit, on-page, technical, content, backlinks, reporting — sab included."
  },
  {
    question: "Q4: Do you work with small businesses?",
    answer: "Yes! Local business SEO humara specialty hai."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="FAQ Illustration" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">Frequently Asked Questions</h2>
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

export default FAQSection;
