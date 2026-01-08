import React, { useState, useEffect } from "react";
import "../Assets/css/SeoContent.css";

import img1 from "../Assets/images/canada1.webp";
import img2 from "../Assets/images/canada2.webp";
import img3 from "../Assets/images/canada3.webp";
import img4 from "../Assets/images/canada4.webp";
import img5 from "../Assets/images/canada5.webp";

const items = [
  { 
    title: "Search Engine Optimization (SEO)", 
    desc: "We improve your website’s rankings on Google through on-page SEO, technical optimization, content strategy, and authority building to drive long-term organic traffic across Canada.",
    img: img1 
  },
  { 
    title: "Google Ads & PPC Management", 
    desc: "We create and manage high-performing Google Ads campaigns focused on leads, sales, and ROI. Our PPC strategies target the right audience across Canada with measurable results.",
    img: img2 
  },
  { 
    title: "Social Media Marketing", 
    desc: "We help businesses grow on Facebook, Instagram, LinkedIn, and TikTok through strategic content, paid campaigns, and audience engagement that builds brand authority.",
    img: img3 
  },
  { 
    title: "Content Marketing Strategy", 
    desc: "We create high-quality blogs, landing pages, and website content designed to attract, engage, and convert your target audience while supporting SEO growth.",
    img: img4 
  },
  { 
    title: "Conversion Rate Optimization (CRO)", 
    desc: "We optimize your website structure, CTAs, and user journey to turn more visitors into leads and customers, maximizing the value of your traffic.",
    img: img5 
  },
  { 
    title: "Website Design & Optimization", 
    desc: "We design fast, mobile-friendly, and conversion-focused websites that deliver a seamless user experience and support all digital marketing efforts.",
    img: img1 
  },
  { 
    title: "Local & City-Based Marketing", 
    desc: "We help businesses target specific Canadian cities through localized SEO, location landing pages, and geo-targeted advertising strategies.",
    img: img2 
  },
  { 
    title: "Online Reputation Management", 
    desc: "We help manage online reviews, brand mentions, and customer feedback to build trust, credibility, and a strong digital reputation.",
    img: img3 
  },
  { 
    title: "Marketing Analytics & Tracking", 
    desc: "We track traffic, leads, conversions, and campaign performance using advanced analytics tools so you always know what’s working.",
    img: img4 
  },
  { 
    title: "Competitor & Market Research", 
    desc: "We analyze competitors, industry trends, and market opportunities to build stronger digital strategies that help you stay ahead.",
    img: img5 
  },
  { 
    title: "Email Marketing & Automation", 
    desc: "We build email campaigns and automation funnels that nurture leads, increase retention, and drive repeat business.",
    img: img1 
  },
  { 
    title: "Monthly Reporting & Optimization", 
    desc: "We provide transparent monthly reports and continuously optimize campaigns to improve performance, ROI, and growth.",
    img: img2 
  }
];

const CanadaContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visible = 3;

  const next = () => {
    if (currentIndex < items.length - visible) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - visible);
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
      <h2>Digital Marketing Services We Offer in Canada</h2>
      <p className="seo-subtext">
        Our full-service digital marketing solutions help Canadian businesses
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

                {/* bottom overlay */}
                <div className="custom-overlay-bottom">
                  <h3>{item.title}</h3>
                </div>

                {/* full overlay */}
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

export default CanadaContent;
