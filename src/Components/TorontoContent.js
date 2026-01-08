import React, { useState, useEffect } from "react";
import "../Assets/css/SeoContent.css";

import img1 from "../Assets/images/toronto1.webp";
import img2 from "../Assets/images/toronto2.webp";
import img3 from "../Assets/images/toronto3.webp";
import img4 from "../Assets/images/toronto4.webp";
import img5 from "../Assets/images/toronto5.webp";

const items = [
  { 
    title: "Search Engine Optimization (SEO)", 
    desc: "We improve your website’s rankings on Google through on-page SEO, technical optimization, content strategy, and authority building to drive long-term organic traffic across Toronto.",
    img: img1 
  },
  { 
    title: "Google Ads & PPC Management", 
    desc: "We create and manage high-performing Google Ads campaigns focused on leads, sales, and ROI. Our PPC strategies target the right audience across Toronto with measurable results.",
    img: img2 
  },
  { 
    title: "Social Media Marketing", 
    desc: "We help Toronto businesses grow on Facebook, Instagram, LinkedIn, and TikTok through strategic content, paid campaigns, and audience engagement that builds brand authority.",
    img: img3 
  },
  { 
    title: "Content Marketing Strategy", 
    desc: "We create high-quality blogs, landing pages, and website content designed to attract, engage, and convert your target audience while supporting SEO growth in Toronto.",
    img: img4 
  },
  { 
    title: "Conversion Rate Optimization (CRO)", 
    desc: "We optimize your website structure, CTAs, and user journey to turn more visitors into leads and customers, maximizing the value of your Toronto traffic.",
    img: img5 
  },
  { 
    title: "Website Design & Optimization", 
    desc: "We design fast, mobile-friendly, and conversion-focused websites that deliver a seamless user experience and support all digital marketing efforts in Toronto.",
    img: img1 
  },
  { 
    title: "Local & City-Based Marketing", 
    desc: "We help businesses target specific Toronto neighborhoods through localized SEO, location landing pages, and geo-targeted advertising strategies.",
    img: img2 
  },
  { 
    title: "Online Reputation Management", 
    desc: "We help manage online reviews, brand mentions, and customer feedback to build trust, credibility, and a strong digital reputation for Toronto businesses.",
    img: img3 
  },
  { 
    title: "Marketing Analytics & Tracking", 
    desc: "We track traffic, leads, conversions, and campaign performance using advanced analytics tools so you always know what’s working for your Toronto campaigns.",
    img: img4 
  },
  { 
    title: "Competitor & Market Research", 
    desc: "We analyze competitors, industry trends, and market opportunities to build stronger digital strategies that help Toronto businesses stay ahead.",
    img: img5 
  },
  { 
    title: "Email Marketing & Automation", 
    desc: "We build email campaigns and automation funnels that nurture leads, increase retention, and drive repeat business in Toronto.",
    img: img1 
  },
  { 
    title: "Monthly Reporting & Optimization", 
    desc: "We provide transparent monthly reports and continuously optimize campaigns to improve performance, ROI, and growth for Toronto businesses.",
    img: img2 
  }
];

const TorontoContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visible = 3;

  const next = () => {
    if (currentIndex < items.length - visible) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="seo-content">
      <h2>Digital Marketing Services We Offer in Toronto</h2>
      <p className="seo-subtext">
        Our full-service digital marketing solutions help Toronto businesses
        increase online visibility, generate qualified leads, and grow revenue
        through data-driven strategies and proven execution.
      </p>

      <div className="custom-slider-container">
        <div className="custom-slider-wrapper">
          <div
            className="custom-slider-track"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visible}%)`,
              transition: "0.6s ease",
            }}
          >
            {items.map((item, idx) => (
              <div key={idx} className="custom-slider-item">
                <img src={item.img} alt={item.title} className="custom-slider-img" />

                <div className="custom-overlay-bottom">
                  <h3>{item.title}</h3>
                </div>

                <div className="custom-overlay-full">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorontoContent;
