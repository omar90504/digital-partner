import React, { useState, useEffect } from "react";
import "../Assets/css/SeoContent.css";

import img1 from "../Assets/images/localseo1.webp";
import img2 from "../Assets/images/localseo2.webp";
import img3 from "../Assets/images/localseo3.webp";
import img4 from "../Assets/images/localseo4.webp";
import img5 from "../Assets/images/localseo5.webp";

const items = [
  { 
    title: "On-Page SEO", 
    desc: "We optimize meta tags, titles, headings, URL structure, keyword placement, internal links, image alt tags, and user-intent based content to improve search relevance and boost page authority across your entire website.",
    img: img1 
  },
  { 
    title: "Off-Page SEO", 
    desc: "We build high-quality backlinks, improve domain authority, manage brand mentions, strengthen trust signals, and use strategic outreach & digital PR to enhance your website’s reputation and ranking power.",
    img: img2 
  },
  { 
    title: "Technical SEO", 
    desc: "We fix indexing issues, crawl errors, broken links, Core Web Vitals, structured data, canonical issues, sitemaps, and site architecture to ensure search engines can fully understand and rank your website.",
    img: img3 
  },
  { 
    title: "Local SEO", 
    desc: "We optimize your Google Business Profile, local citations, map rankings, service-area keywords, reviews, and NAP consistency to help your business appear in local searches and attract nearby customers.",
    img: img4 
  },
  { 
    title: "Content SEO", 
    desc: "We create SEO-rich blogs, landing pages, service pages, and authority guides using topical clustering, keyword mapping, and user-intent strategies that drive traffic, engagement, and conversions.",
    img: img5 
  },
  { 
    title: "E-Commerce SEO", 
    desc: "We enhance product pages, category pages, filters, schema markup, site speed, and CRO elements to increase visibility, improve search ranking, and drive more targeted buyers to your online store.",
    img: img1 
  },
  { 
    title: "Mobile SEO", 
    desc: "We optimize mobile loading speed, responsive design, mobile-first indexing, tap targets, fonts, and overall UX to ensure your website ranks higher on smartphones where most users search today.",
    img: img2 
  },
  { 
    title: "Voice Search SEO", 
    desc: "We structure your content with conversational keywords, FAQs, and short-answer responses so your business appears in voice search results on Google Assistant, Siri, Alexa, and smart devices.",
    img: img3 
  },
  { 
    title: "Video SEO", 
    desc: "We optimize YouTube videos with compelling thumbnails, keyword-rich titles, metadata, timestamps, playlists, and engagement strategies that drive higher watch-time and better search rankings.",
    img: img4 
  },
  { 
    title: "Enterprise SEO", 
    desc: "We deliver large-scale SEO strategies including automated crawling, complex site structure optimization, global keyword targeting, and data-driven improvements for high-traffic enterprise websites.",
    img: img5 
  },
  { 
    title: "AI-Driven SEO", 
    desc: "We use AI tools to analyze competitor gaps, identify high-value keywords, optimize content structure, generate performance insights, and elevate your search visibility using intelligent automation.",
    img: img1 
  },
  { 
    title: "Reputation SEO", 
    desc: "We manage online reviews, monitor brand mentions, suppress negative content, improve trust signals, and reinforce a positive brand image across Google, directories, and social platforms.",
    img: img2 
  }
];


const LocalSeoContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visible = 3;

  const next = () => {
    if (currentIndex < items.length - visible) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // LOOP BACK
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - visible); // last visible group
    }
  };

  // ---- AUTO SLIDE EVERY 3 SEC ----
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="seo-content">
      <h2>Types of SEO</h2>
      <p className="seo-subtext">
        SEO has many categories, and each one plays a unique role in improving your website’s visibility, 
        ranking, and overall online performance. Below are the most important types of SEO needed 
        to build a strong digital presence.
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

export default LocalSeoContent;
