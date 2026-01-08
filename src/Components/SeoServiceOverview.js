import React from "react";
import "../Assets/css/SeoServiceOverView.css";

import img1 from "../Assets/images/SEOService8.webp";
import img2 from "../Assets/images/SEOService7.webp";
import img3 from "../Assets/images/SEOService6.webp";

const SeoServiceOverView = () => {
  return (
    <section className="seo-overview">

      <h2>Why SEO Matters for Your Business in Canada</h2>
      <p>
        Every day, thousands of Canadian customers search online for products and services.
        SEO ensures your business appears at the top of Google search results, builds
        authority, and drives consistent organic traffic without paying for ads.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="SEO Traffic Growth Canada" className="seo-img" />
          <h3>Grow Your Canadian Audience</h3>
          <p>
            A well-optimized website attracts the right Canadian audience, increases trust,
            and generates more leads and conversions without extra ad spend.
          </p>
          <ul>
            <li>Better visibility in Canadian search results</li>
            <li>More qualified local traffic</li>
            <li>Improved brand authority in Canada</li>
            <li>Consistent long-term organic growth</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="SEO Company Canada" className="seo-img" />
          <h3>Expert SEO Services Across Canada</h3>
          <p>
            From startups to national enterprises, we help Canadian businesses improve
            rankings, strengthen online presence, and generate consistent leads.
          </p>
          <ul>
            <li>Keyword research & competitor analysis in Canadian markets</li>
            <li>On-page & technical optimization for Canada-focused websites</li>
            <li>Content strategy & authoritative link building</li>
            <li>Conversion-focused SEO planning for Canadian users</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Local SEO Canada" className="seo-img" />
          <h3>Local SEO for Canadian Cities</h3>
          <p>
            Whether you target Toronto, Vancouver, Calgary, or multiple Canadian locations,
            our local SEO strategies help you rank in Google Maps, local searches, and
            city-specific queries.
          </p>
          <ul>
            <li>Google Business Profile optimization for Canadian locations</li>
            <li>Local citations & NAP consistency across Canada</li>
            <li>Geo-targeted keywords for Canadian cities</li>
            <li>Enhanced visibility in local Canadian searches</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Trusted SEO Partner Across Canada</h2>
      <p>
        With a data-driven approach and years of experience in the Canadian market,
        we deliver SEO solutions tailored to your industry, goals, and local competition.
        Our focus is on long-term growth, sustainable rankings, and measurable results.
      </p>

      <h3>Why Choose Our SEO Agency in Canada?</h3>
      <ul>
        <li>Customized SEO strategies for Canadian businesses</li>
        <li>Monthly reports with full transparency</li>
        <li>Dedicated support from SEO experts familiar with Canadian markets</li>
        <li>Proven results for businesses across multiple Canadian industries</li>
      </ul>

    </section>
  );
};

export default SeoServiceOverView;
