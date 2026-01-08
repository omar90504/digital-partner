import React from "react";
import "../Assets/css/SEOServiceHeroSection.css";
import hero from "../Assets/images/canada.webp";

const CanadaHeroSection = () => {
  return (
    <header className="seo-header">
      <section className="seo-hero">
        
        {/* LEFT SIDE */}
        <div className="seo-left">
          <h1>
            Digital Marketing<br /> Services in Canada <br />
            <span>Grow Traffic,<br /> Leads & Sales</span>
          </h1>

          <p>
            Digital Partner provides professional digital marketing services in Canada
            to help businesses grow online, attract the right audience, and increase
            conversions. We work with startups, small businesses, and established
            companies across Canada to deliver measurable marketing results.
          </p>

          <p>
            Our services include SEO, Google Ads, social media marketing, content
            marketing, and conversion-focused website optimization. Whether your
            business operates in Toronto, Vancouver, Calgary, Ottawa, or anywhere in
            Canada, we create customized strategies tailored to your market and goals.
          </p>

          <a href="/contact" className="seo-btn">Get Free Digital Marketing Consultation</a>

          <p className="call-now">
            📞 Call Now: (+1) 959-777-5007
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo-right">
          <img src={hero} alt="Digital Marketing Services in Canada" />
        </div>

      </section>
    </header>
  ); 
};

export default CanadaHeroSection;
