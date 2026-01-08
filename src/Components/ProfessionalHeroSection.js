import React from "react";
import "../Assets/css/SEOHeroSection.css";
import hero from "../Assets/images/SEOService.webp";

const ProfessionalHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">

        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            Professional<br /> SEO Services <br /> Across Canada <br />
            <span>Drive Growth &<br /> Visibility</span>
          </h1>

          <p>
            Elevate your online presence with our expert SEO solutions. Our team specializes in 
            professional SEO strategies that increase search rankings, attract qualified traffic, 
            and convert visitors into loyal customers. We help Canadian businesses grow sustainably 
            in a competitive digital landscape.
          </p>

          <a href="/contact" className="seo-btn">Get Your Free Consultation</a>

          <p className="call-now">Call Us Anytime: (+1) 959-777-5007</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="Professional SEO Services Canada" />
        </div>

      </section>
    </header>
  );
};

export default ProfessionalHeroSection;
