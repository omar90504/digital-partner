import React from "react";
import "../Assets/css/SEOHeroSection.css";
import hero from "../Assets/images/SEO-hero-section.webp";

const SEOHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">

        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            SEO Company <br /> in Canada <br />
            <span>Grow Faster</span>
          </h1>

          <p>
            SEO (Search Engine Optimization) is one of the most powerful ways to help
            your business get found online. In a competitive digital world like Canada,
            partnering with the right SEO agency can make all the difference. At Digital
            Partner, we help businesses across Canada improve rankings, attract qualified
            traffic, and convert more customers.
          </p>

          <a href="/contact" className="seo-btn">Get Free Quote</a>

          <p className="call-now">Call Us Anytime: (+1) 959-777-5007</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="SEO Services Canada" />
        </div>

      </section>
    </header>
  );
};

export default SEOHeroSection;
