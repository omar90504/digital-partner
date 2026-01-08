import React, { useState } from "react";
import "../Assets/css/SeoFAQ.css"; // custom CSS
import faqImage from "../Assets/images/toronto9.webp";

const faqData = [
  {
    question: "Q1: How long does digital marketing take to show results in Toronto?",
    answer:
      "Digital marketing results in Toronto depend on competition and services used. SEO usually takes 3–6 months to show strong results, while Google Ads and social media campaigns can generate leads immediately. Consistent optimization delivers long-term growth."
  },
  {
    question: "Q2: Can you guarantee top Google rankings in Toronto?",
    answer:
      "No agency can guarantee #1 rankings in Google. However, our proven Toronto-focused SEO, PPC, and content strategies significantly improve search visibility, traffic, and qualified leads for local businesses."
  },
  {
    question: "Q3: What digital marketing services do you offer in Toronto?",
    answer:
      "Our Toronto digital marketing services include SEO, Google Ads, local SEO, social media marketing, content marketing, conversion rate optimization, website improvements, analytics tracking, and transparent monthly reporting."
  },
  {
    question: "Q4: Do you work with small and local businesses in Toronto?",
    answer:
      "Yes! We work with small, medium, and growing businesses across Toronto, including local service providers, startups, and established companies, helping them attract local customers and grow revenue."
  },
  {
    question: "Q5: How do you measure digital marketing success for Toronto businesses?",
    answer:
      "We track key performance indicators such as website traffic, local keyword rankings, leads, conversions, ad performance, call tracking, and ROI. Monthly reports provide clear insights into your Toronto campaign performance."
  },
  {
    question: "Q6: Can you run campaigns for multiple Toronto areas or neighborhoods?",
    answer:
      "Absolutely! We create area-specific campaigns and landing pages targeting Toronto neighborhoods such as Downtown, North York, Scarborough, Etobicoke, and Mississauga to maximize local visibility and lead generation."
  }
];

const TorontoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-wrapper">
        
        {/* Left image */}
        <div className="seo-faq-image">
          <img src={faqImage} alt="Digital Marketing FAQ Toronto" />
        </div>

        {/* Right FAQ */}
        <div className="seo-faq-content">
          <h2 className="seo-faq-title">Digital Marketing FAQ – Toronto</h2>

          <div className="seo-faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`seo-faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
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

export default TorontoFAQ;
