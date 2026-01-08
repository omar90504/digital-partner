import React from "react";
import "../Assets/css/SeoServiceOverView.css";

import img1 from "../Assets/images/canada8.webp";
import img2 from "../Assets/images/canada7.webp";
import img3 from "../Assets/images/canada6.webp";

const CanadaOverview = () => {
  return (
    <section className="seo-overview">

      <h2>Why Digital Marketing Matters for Businesses in Canada</h2>
      <p>
        Today, Canadian customers search, compare, and make buying decisions online.
        Without a strong digital marketing strategy, businesses risk losing visibility,
        leads, and revenue to competitors. Digital marketing helps you reach the right
        audience at the right time and convert interest into real business growth.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="Digital Marketing Traffic Growth" className="seo-img" />
          <h3>Increase Website Traffic & Leads</h3>
          <p>
            Digital marketing helps drive high-quality traffic to your website through
            SEO, paid advertising, and content strategies designed to convert visitors
            into leads and customers.
          </p>
          <ul>
            <li>Higher visibility on Google & search platforms</li>
            <li>More qualified leads and inquiries</li>
            <li>Better conversion-focused traffic</li>
            <li>Consistent growth through organic & paid channels</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="Canada Digital Marketing Agency" className="seo-img" />
          <h3>Marketing Strategies for Canadian Markets</h3>
          <p>
            Every market is different. We create customized digital marketing strategies
            based on your industry, audience, and goals—whether you target one city or
            customers across all of Canada.
          </p>
          <ul>
            <li>SEO and Google Ads tailored for Canada</li>
            <li>City and region-based targeting</li>
            <li>Industry-specific marketing plans</li>
            <li>Scalable campaigns for long-term growth</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Online Brand Growth Canada" className="seo-img" />
          <h3>Build a Strong Online Brand</h3>
          <p>
            Digital marketing strengthens your brand presence across search engines,
            social media, and online platforms, helping you build trust and authority
            with your target audience.
          </p>
          <ul>
            <li>Improved brand visibility & credibility</li>
            <li>Social media engagement & awareness</li>
            <li>Online reputation and trust building</li>
            <li>Consistent brand messaging across channels</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Digital Marketing Partner in Canada</h2>
      <p>
        Digital Partner helps Canadian businesses grow through data-driven digital
        marketing strategies including SEO, PPC, social media marketing, content
        creation, and conversion optimization. We focus on measurable results that
        support long-term business success.
      </p>

      <h3>Why Choose Digital Partner?</h3>
      <ul>
        <li>Customized digital marketing strategies for Canada</li>
        <li>SEO, Google Ads, social media & content marketing under one roof</li>
        <li>Transparent reporting and performance tracking</li>
        <li>Proven results for businesses across multiple Canadian cities</li>
      </ul>

    </section>
  );
};

export default CanadaOverview;
