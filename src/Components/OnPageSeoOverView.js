import React from "react";
import "../Assets/css/SeoOverview.css";

import img1 from "../Assets/images/onpage seo9.webp";
import img2 from "../Assets/images/onpage seo7.webp";
import img3 from "../Assets/images/onpage seo8.webp";

const OnPageSeoOverview = () => {
  return (
    <section className="seo-overview">

      {/* Main Heading - focus on On-Page SEO */}
      <h1>On-Page SEO Services in Canada</h1>

      <p>
        On-page SEO is a critical part of any digital marketing strategy. Our professional on-page SEO services in Canada help businesses improve website structure, optimize content, and increase visibility on Google. 
        With our expertise, your website can attract qualified traffic, boost engagement, and achieve sustainable growth without relying solely on paid ads.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="On-Page SEO Traffic Growth Canada" className="seo-img" />
          <h2>Boost Your Organic Visibility</h2>
          <p>
            Our on-page SEO strategies optimize every element of your website, from meta tags to content structure, helping you rank higher and attract the right audience.
          </p>
          <ul>
            <li>Optimized title tags, meta descriptions, and headings</li>
            <li>High-quality, keyword-rich content for your target audience</li>
            <li>Improved user experience and website structure</li>
            <li>Long-term organic growth without excessive ad spend</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="Professional On-Page SEO Services Canada" className="seo-img" />
          <h2>Expert SEO Optimization for Any Industry</h2>
          <p>
            Whether you run a local business or a large enterprise, our on-page SEO experts deliver customized solutions to increase rankings, traffic, and conversions.
          </p>
          <ul>
            <li>Comprehensive keyword research & competitor analysis</li>
            <li>Content optimization with SEO best practices</li>
            <li>Internal linking and structured data implementation</li>
            <li>Conversion-focused on-page SEO planning</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Local On-Page SEO Services Canada" className="seo-img" />
          <h2>Local SEO Optimization for Targeted Growth</h2>
          <p>
            Our local on-page SEO ensures your business ranks in Google Maps, local search results, and location-specific queries, driving nearby customers directly to your website.
          </p>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Local keyword targeting & optimized meta tags</li>
            <li>Consistent NAP & local citations</li>
            <li>Improved local search rankings and traffic</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Trusted On-Page SEO Partner in Canada</h2>
      <p>
        Leveraging years of experience and a results-driven approach, we provide tailored on-page SEO solutions for businesses of all sizes. 
        Our goal is long-term visibility, measurable growth, and full transparency in every project we handle.
      </p>

      <h3>Why Choose Our On-Page SEO Services?</h3>
      <ul>
        <li>Customized on-page SEO strategies for your business goals</li>
        <li>Detailed monthly reports with actionable insights</li>
        <li>Dedicated support from experienced SEO specialists</li>
        <li>Proven results across multiple industries in Canada</li>
      </ul>

      {/* Internal link for SEO page */}
      <p>
        Learn more about our on-page SEO services in Canada to optimize your website for search engines and users.
      </p>

    </section>
  );
};

export default OnPageSeoOverview;
