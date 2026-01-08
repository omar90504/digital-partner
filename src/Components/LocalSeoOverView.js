import React from "react";
import "../Assets/css/SeoServiceOverView.css";

import img1 from "../Assets/images/localseo8.webp";
import img2 from "../Assets/images/localseo7.webp";
import img3 from "../Assets/images/localseo6.webp";

const LocalSeoOverview = () => {
  return (
    <section className="seo-overview">

      <h2>Why Local SEO Matters for Your Business</h2>
      <p>
        Every day, customers search for nearby services like “plumber near me”,
        “best dentist in my city” or “local movers”. Local SEO ensures your business
        shows up at the top of those local searches, especially on Google Maps.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="Local Traffic Growth" className="seo-img" />
          <h3>Get More Local Traffic & Calls</h3>
          <p>
            Local SEO helps your business appear in nearby searches, bringing real
            customers ready to call, visit, or book service.
          </p>
          <ul>
            <li>Higher visibility in “near me” searches</li>
            <li>More local calls & walk-in customers</li>
            <li>Increased Google Maps rankings</li>
            <li>Better conversion from local intent users</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="Local SEO Company" className="seo-img" />
          <h3>Local SEO for Multiple Service Areas</h3>
          <p>
            Whether you serve 1 city or 10 cities, we optimize your pages,
            Google Business Profiles and landing pages for each location.
          </p>
          <ul>
            <li>City-specific landing pages</li>
            <li>Localized keyword targeting</li>
            <li>Unique content for every area</li>
            <li>Service area optimization</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Google Maps Ranking" className="seo-img" />
          <h3>Rank Higher on Google Maps</h3>
          <p>
            Local SEO boosts your position inside the “Local 3-Pack”, helping you
            appear above competitors in Maps results.
          </p>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Local citations & NAP accuracy</li>
            <li>More 5-star reviews & reputation management</li>
            <li>Map pack visibility for local searches</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Local SEO Partner</h2>
      <p>
        We specialize in helping local businesses dominate their service area with
        website optimization, city pages, citation building and Maps ranking 
        strategies. If your customers can visit, call, or book locally—we help you
        get in front of them.
      </p>

      <h3>Why Choose Our Local SEO Agency?</h3>
      <ul>
        <li>Local SEO strategies customized for your business</li>
        <li>Google Maps & city page optimization</li>
        <li>Monthly tracking reports & call conversions</li>
        <li>Proven results for businesses in multiple cities</li>
      </ul>

    </section>
  );
};

export default LocalSeoOverview;
