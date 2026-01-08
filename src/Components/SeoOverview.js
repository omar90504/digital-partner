import React from "react";
import "../Assets/css/SeoOverview.css";

import img1 from "../Assets/images/seo-growth.webp";
import img2 from "../Assets/images/seo-company.webp";
import img3 from "../Assets/images/local-seo.webp";

const SeoOverview = () => {
  return (
    <section className="seo-overview">

      <h2>Why SEO Matters for Your Business</h2>
      <p>
        Every day, thousands of customers search online for services and products.
        SEO ensures your business appears at the top of Google, builds authority,
        and drives long-term, consistent traffic without paying for ads.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="SEO Traffic Growth" className="seo-img" />
          <h3>Strong SEO = Sustainable Growth</h3>
          <p>
            A well-optimized website attracts the right audience, increases trust,
            and generates more conversions over time without increasing ad spend.
          </p>
          <ul>
            <li>Higher visibility on Google</li>
            <li>More qualified traffic</li>
            <li>Improved brand authority</li>
            <li>Consistent long-term organic growth</li> 
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="SEO Company Canada" className="seo-img" />
          <h3>Expert SEO Services for All Industries</h3>
          <p>
            From small businesses to enterprise brands, we help companies improve
            rankings, strengthen their online presence, and generate consistent leads.
          </p>
          <ul>
            <li>Keyword research & competitor analysis</li>
            <li>On-page & technical optimization</li>
            <li>Content strategy & link building</li>
            <li>Conversion-focused SEO planning</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Local SEO Optimization" className="seo-img" />
          <h3>Local SEO for City-Specific Growth</h3>
          <p>
            Whether you target a single city or multiple locations, our local SEO
            strategies help you appear in Maps, local searches, and service-based queries.
          </p>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Local citations & NAP accuracy</li>
            <li>Geo-targeted keywords</li>
            <li>Better visibility in local searches</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Trusted SEO Partner in Canada</h2>
      <p>
        With a data-driven approach and years of experience, we deliver SEO solutions
        tailored to your industry, goals, and market competition. Our focus is on
        long-term success—not shortcuts.
      </p>

      <h3>Why Choose Our SEO Agency?</h3>
      <ul>
        <li>Customized SEO strategies for your business</li>
        <li>Monthly reports with full transparency</li>
        <li>Dedicated support from SEO experts</li>
        <li>Proven results across multiple industries</li>
      </ul>

    </section>
  );
};

export default SeoOverview;
