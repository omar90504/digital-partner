import React from "react";
import "../Assets/css/SEOServiceHeroSection.css";
import hero from "../Assets/images/localseo.webp";

const LocalSEOHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">
        
        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            Local SEO Services <br /> in Canada <br />
            <span>Rank in Maps &<br /> Local Search</span>
          </h1>

          <p>
            Want more calls, leads, and customers from your local area? Our Local SEO
            services help businesses rank higher in Google Maps, Local Pack, and
            “near me” searches. We make sure your business appears when people nearby
            are searching for your services.
          </p>

          <p>
            We optimize your Google Business Profile, build local citations, improve
            reviews, add location pages, and ensure your NAP is consistent everywhere.
            Whether you're in Toronto, Vancouver, Calgary, Ottawa or any Canadian city —
            our experts drive real local results.
          </p>

          <a href="/contact" className="seo-btn">Get Free Local SEO Audit</a>

          <p className="call-now">
            📞 Call Now: (+1) 959-777-5007
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="Local SEO Services in Canada" />
        </div>

      </section>
    </header>
  ); 
};

export default LocalSEOHeroSection;
