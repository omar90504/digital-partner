import React from "react";
import "../Assets/css/SEOServiceHeroSection.css";
import hero from "../Assets/images/SEOService.webp";

const SEOServiceHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">
        
        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            SEO Services <br /> in Canada <br />
            <span>Rank Higher <br /> Get More Leads</span>
          </h1>

          <p>
            Looking for a trusted SEO agency in Canada? We help Canadian businesses
            dominate Google, improve online visibility, and generate more qualified leads.
            Whether you are in Toronto, Vancouver, Calgary, Ottawa, or any other province,
            our SEO experts deliver results that grow your business.
          </p>

          <p>
            From Local SEO to National SEO, Technical Optimization, Content Creation,
            and Monthly Reporting — we do it all. Our strategies are 100% white-hat,
            measurable, and designed to increase rankings, calls, and sales.
          </p>

          <a href="/contact" className="seo-btn">Get Free SEO Audit</a>

          <p className="call-now">
            📞 Call Now: (+1) 959-777-5007
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="SEO Services in Canada - Digital Partner" />
        </div>

      </section>
    </header>
  ); 
};

export default SEOServiceHeroSection;
