import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/seo-faq.jpg";

const faqData = [
  {
    question: "Q1: How long does it take to see SEO results?",
    answer: "SEO results typically appear within 3–6 months, depending on competition, website health, and content quality."
  },
  {
    question: "Q2: Do you guarantee top Google rankings?",
    answer: "No SEO agency can guarantee #1 rankings, but we use proven strategies and continuous optimization to achieve measurable growth."
  },
  {
    question: "Q3: What services are included in your SEO package?",
    answer: "Our professional SEO services include a full website audit, on-page optimization, technical SEO fixes, content strategy, link building, and detailed reporting."
  },
  {
    question: "Q4: Can you handle small business SEO in Canada?",
    answer: "Absolutely! We specialize in helping Canadian small businesses increase online visibility, attract local customers, and generate more leads."
  },
  {
    question: "Q5: How do you measure SEO success?",
    answer: "We track keyword rankings, organic traffic, conversions, and ROI, providing monthly reports with actionable insights to ensure continuous improvement."
  },
  {
    question: "Q6: Do you offer local SEO for multiple cities?",
    answer: "Yes! Our local SEO strategies target multiple locations, optimize Google Business Profiles, manage citations, and boost visibility in local searches."
  }
];

const ProfessionalFAQ = () => {
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
          <h2 className="seo-faq-title">Professional SEO FAQ</h2>
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

export default ProfessionalFAQ;
