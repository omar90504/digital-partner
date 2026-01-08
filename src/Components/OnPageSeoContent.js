import React, { useState, useEffect } from "react";
import "../Assets/css/SeoContent.css";

import img1 from "../Assets/images/onpage seo1.webp";
import img2 from "../Assets/images/onpage seo2.webp";
import img3 from "../Assets/images/onpage seo3.webp";
import img4 from "../Assets/images/onpage seo4.webp";
import img5 from "../Assets/images/onpage seo5.webp";

const items = [
  { 
    title: "Meta Tags Optimization", 
    desc: "We optimize your page titles, meta descriptions, and headings for targeted keywords to improve search visibility and CTR in Google search results.",
    img: img1 
  },
  { 
    title: "URL Structure & Internal Linking", 
    desc: "We structure URLs, categories, and internal links to ensure proper hierarchy, crawlability, and better indexing by search engines.",
    img: img2 
  },
  { 
    title: "Content Optimization", 
    desc: "We refine page content with keyword placement, LSI keywords, and semantic structure to match user intent and improve on-page relevance.",
    img: img3 
  },
  { 
    title: "Schema Markup & Rich Snippets", 
    desc: "We add structured data for products, services, FAQs, and local business info so your pages display rich results and attract clicks.",
    img: img4 
  },
  { 
    title: "Image SEO & Alt Tags", 
    desc: "We optimize images with descriptive file names, alt tags, and compression to improve load speed and enhance search engine understanding.",
    img: img5 
  },
  { 
    title: "Mobile & Page Speed Optimization", 
    desc: "We ensure your website is mobile-friendly, fast-loading, and responsive, improving rankings and user experience for local searches.",
    img: img1 
  },
  { 
    title: "Header Tags & On-Page Structure", 
    desc: "We optimize H1-H6 tags, bullet points, tables, and content hierarchy to help search engines understand your page topics and improve SEO.",
    img: img2 
  },
  { 
    title: "Internal Linking Strategy", 
    desc: "We strategically link related pages and blog posts to pass link equity, improve navigation, and enhance user engagement on your website.",
    img: img3 
  },
  { 
    title: "Local On-Page SEO", 
    desc: "We include city-specific keywords, embed maps, and optimize location pages so your business ranks higher for local search queries.",
    img: img4 
  },
  { 
    title: "Content Updates & Optimization", 
    desc: "We regularly update pages with fresh content, optimize blogs, and enhance landing pages to maintain relevance and improve search rankings.",
    img: img5 
  }
];

const OnPageSeoContent = () => {
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
      <h2>On-Page SEO Services We Offer</h2>
      <p className="seo-subtext">
        Our On-Page SEO services help your website rank higher in Google by optimizing every page element, improving user experience, and driving qualified organic traffic.
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

export default OnPageSeoContent;
