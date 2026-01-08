import React, { useState, useEffect } from "react";
import "../Assets/css/SeoContent.css";

import img1 from "../Assets/images/localseo1.webp";
import img2 from "../Assets/images/localseo2.webp";
import img3 from "../Assets/images/localseo3.webp";
import img4 from "../Assets/images/localseo4.webp";
import img5 from "../Assets/images/localseo5.webp";

const items = [
  { 
    title: "Google Business Profile Optimization", 
    desc: "We optimize your Google Business Profile with correct categories, NAP consistency, services, photos, posts, and local keywords to improve ranking in Google Maps and Local Pack.",
    img: img1 
  },
  { 
    title: "Local Citations & Directory Listings", 
    desc: "We build high-quality local citations on trusted business directories and platforms ensuring accurate name, address, phone (NAP) to improve your location authority.",
    img: img2 
  },
  { 
    title: "Local Keyword Targeting", 
    desc: "We find high-intent location-based keywords like 'near me', 'city + service', and 'best + service provider' to drive local traffic and increase calls.",
    img: img3 
  },
  { 
    title: "Location Pages & Service Area Pages", 
    desc: "We create SEO-optimized landing pages for each city or service area you serve to help your business rank in multiple local searches and expand visibility.",
    img: img4 
  },
  { 
    title: "Google Maps Ranking (3-Pack)", 
    desc: "We implement strategies that improve your ranking in Google Local 3-Pack, including proximity, relevance, authority, reviews, and engagement signals.",
    img: img5 
  },
  { 
    title: "Local Link Building", 
    desc: "We build local backlinks from news websites, chambers, local blogs, community pages, and sponsorships to improve domain authority and trust signals.",
    img: img1 
  },
  { 
    title: "Online Reputation & Reviews", 
    desc: "We increase positive reviews on Google, manage feedback, respond to customers, and build trust across Google Maps, Yelp, and local directories.",
    img: img2 
  },
  { 
    title: "Schema Markup for Local SEO", 
    desc: "We implement Local Business Schema, FAQ Schema, and Service Schema so search engines clearly understand your business details and display rich results.",
    img: img3 
  },
  { 
    title: "Mobile & Speed Optimization", 
    desc: "We ensure your site loads fast, mobile-friendly, responsive design and UX so local customers can find & contact you instantly from smartphones.",
    img: img4 
  },
  { 
    title: "Local Competitor Research", 
    desc: "We analyze top local competitors, find ranking gaps, identify backlink sources, review patterns, and build stronger strategies to outrank them.",
    img: img5 
  },
  { 
    title: "Content that Ranks Locally", 
    desc: "We create local intent content like city pages, service pages, FAQs, and blog topics that attract nearby customers and convert into real leads.",
    img: img1 
  },
  { 
    title: "Tracking & Monthly Reports", 
    desc: "We track local rankings, phone calls, map visits, traffic, and conversions with detailed monthly reporting so you see your ROI clearly.",
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
      <h2>Local SEO Services We Offer</h2>
      <p className="seo-subtext">
        Local SEO helps your business rank higher in Google Maps, Local 3-Pack, and
        nearby searches. These specialized services ensure local customers easily
        find you, call you, and visit your location.
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
