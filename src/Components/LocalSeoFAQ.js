import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/localseo9.webp";

const faqData = [
  {
    question: "Q1: How long does Local SEO take to show results?",
    answer:
      "Local SEO improvements normally appear within 30–90 days. Google Maps rankings, calls, and website traffic gradually increase as we optimize your business profile, citations, and local content."
  },
  {
    question: "Q2: Can you guarantee top rankings in Google Maps?",
    answer:
      "No agency can guarantee #1 position, but our proven Local SEO strategies significantly improve visibility in Google Maps, local 3-pack, and 'near me' searches."
  },
  {
    question: "Q3: What is included in your Local SEO service?",
    answer:
      "Our Local SEO includes Google Business Profile optimization, local citations, NAP consistency, location pages, reviews strategy, local keyword research, and monthly reporting."
  },
  {
    question: "Q4: Do you work with local small businesses?",
    answer:
      "Yes! We specialize in helping local service businesses like plumbers, movers, dentists, restaurants, and home services attract more local customers and generate calls."
  },
  {
    question: "Q5: How do you measure Local SEO success?",
    answer:
      "We track Google Maps rankings, phone calls, direction requests, website visits, keyword visibility, and overall conversions. Monthly reports show growth clearly."
  },
  {
    question: "Q6: Can you optimize multiple locations?",
    answer:
      "Absolutely! We create unique location pages, manage multiple Google Business Profiles, build citations, and track performance separately for each service area."
  }
];

const LocalSeoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="Local SEO FAQ Illustration" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">Local SEO FAQ</h2>
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

export default LocalSeoFAQ;
