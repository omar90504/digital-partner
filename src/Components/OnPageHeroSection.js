import React from "react";
import "../Assets/css/SEOHeroSection.css";
import hero from "../Assets/images/onpage seo.webp";

const OnPageHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">

        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            On-Page SEO<br /> Services  Across <br />Canada <br />
            <span>Optimize Your Site<br /> & Boost Rankings</span>
          </h1>

          <p>
            Improve your website’s performance with our expert On-Page SEO solutions. 
            We optimize meta tags, headings, content, internal links, and page structure 
            to enhance search engine visibility, attract more qualified traffic, 
            and convert visitors into loyal customers.
          </p>

          <a href="/contact" className="seo-btn">Get Your Free On-Page SEO Audit</a>

          <p className="call-now">Call Us Anytime: (+1) 959-777-5007</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="On-Page SEO Services Canada" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
        </div>

      </section>
    </header>
  );
};

export default OnPageHeroSection;
