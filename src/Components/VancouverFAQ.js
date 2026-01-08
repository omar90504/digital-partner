import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/vencouver9.webp"; // Vancouver-specific image ho to replace karo

const faqData = [
  {
    question: "Q1: How long does digital marketing take to show results?",
    answer:
      "Digital marketing results vary by service and competition. SEO improvements typically appear within 3–6 months, while PPC and social campaigns can generate leads immediately. Consistent strategy ensures long-term growth for Vancouver businesses."
  },
  {
    question: "Q2: Can you guarantee top rankings in Google?",
    answer:
      "No agency can guarantee #1 position on Google, but our proven strategies for SEO, paid ads, and content marketing significantly improve visibility, traffic, and lead generation across Vancouver."
  },
  {
    question: "Q3: What services are included in your digital marketing packages?",
    answer:
      "Our digital marketing services include SEO, Google Ads, social media marketing, content marketing, conversion optimization, website improvements, analytics tracking, and monthly reporting tailored for Vancouver businesses."
  },
  {
    question: "Q4: Do you work with small and medium businesses in Vancouver?",
    answer:
      "Yes! We help businesses of all sizes—from local shops to regional brands—attract the right audience, generate leads, and grow revenue using customized digital marketing strategies in Vancouver."
  },
  {
    question: "Q5: How do you measure digital marketing success?",
    answer:
      "We track key metrics like website traffic, leads, conversions, ad performance, social engagement, keyword rankings, and ROI. Monthly reports provide clear insights into your Vancouver campaign performance."
  },
  {
    question: "Q6: Can you manage multiple campaigns for different cities?",
    answer:
      "Absolutely! We create city-specific campaigns, optimize landing pages, run targeted ads, and track results separately to maximize visibility and leads across multiple Vancouver neighborhoods."
  }
];

const VancouverFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="Digital Marketing FAQ Illustration Vancouver" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">Digital Marketing FAQ – Vancouver</h2>
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

export default VancouverFAQ;
