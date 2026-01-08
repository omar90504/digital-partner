import React, { useState, useEffect } from "react";
import "../Assets/css/SeoServiceContent.css";

import img1 from "../Assets/images/SEOService1.webp";
import img2 from "../Assets/images/SEOService2.webp";
import img3 from "../Assets/images/SEOService3.webp";
import img4 from "../Assets/images/SEOService4.webp";
import img5 from "../Assets/images/SEOService5.webp";

const items = [
  {
    title: "Local SEO Canada",
    desc: "Boost visibility in Canadian cities with Google Business Profile optimization, local citations, map rankings, service-area keywords, and reviews to attract nearby customers.",
    img: img4
  },
  {
    title: "National SEO",
    desc: "Rank your business across Canada using high-intent keywords, competitor gap analysis, authority building, content strategy, and powerful backlink acquisition.",
    img: img1
  },
  {
    title: "E-Commerce SEO",
    desc: "Increase online sales with product/page optimization, schema markup, technical fixes, CRO, and category enhancements designed for Canadian shopping behaviour.",
    img: img5
  },
  {
    title: "Technical SEO",
    desc: "We handle indexing, sitemaps, canonical tags, page speed, Core Web Vitals, structured data, and mobile-first optimization to ensure full crawl and ranking.",
    img: img3
  },
  {
    title: "Content SEO",
    desc: "We write authority content for Canadian audiences: blog posts, landing pages, service pages, hub pages, and topical clusters that rank and convert.",
    img: img2
  },
  {
    title: "Link Building Canada",
    desc: "White-hat backlinks from trusted Canadian websites, directories, blogs, media sites, and local publishers to build domain authority.",
    img: img1
  },
  {
    title: "Multi-Location SEO",
    desc: "For businesses serving multiple Canadian cities, we optimize local pages, citations, geo-targeted content, and map listings to dominate local search.",
    img: img4
  },
  {
    title: "Mobile SEO",
    desc: "Improve mobile speed, UI/UX, responsive layout, CLS/LCP/INP, and ranking performance for smartphone users across Canada.",
    img: img2
  },
  {
    title: "AI-Powered SEO",
    desc: "AI tools for keyword discovery, competitor analysis, content optimization, internal linking strategy, and predictive ranking insights.",
    img: img3
  },
  {
    title: "Enterprise SEO",
    desc: "Large-scale SEO for big Canadian companies: automation, data dashboards, advanced crawling, global targeting and growth planning.",
    img: img5
  },
];

const SeoServiceContent = () => {
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
      <h2>SEO Services in Canada</h2>

      <p className="seo-subtext">
        We provide full-service SEO solutions across Canada to help your business get higher rankings, 
        more traffic, and more customers. These are the core SEO services that deliver strong results 
        for Canadian companies of all sizes.
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

export default SeoServiceContent;
