import React from "react";
import "../Assets/css/SeoOverview.css";

import img1 from "../Assets/images/Professional6.webp";
import img2 from "../Assets/images/Professional7.webp";
import img3 from "../Assets/images/Professional8.webp";

const ProfessionalOverview = () => {
  return (
    <section className="seo-overview">

      <h2>Why Professional SEO Services Matter</h2>
      <p>
        In today’s competitive digital landscape, professional SEO is essential for businesses that want to be found online. 
        It helps your brand appear at the top of search results, attract qualified leads, and generate sustainable growth without relying solely on ads.
      </p>

      {/* 3 Column Row */}
      <div className="seo-columns">

        {/* Column 1 */}
        <div className="seo-col">
          <img src={img1} alt="SEO Traffic Growth" className="seo-img" />
          <h3>Drive Sustainable Growth</h3>
          <p>
            A strategically optimized website not only attracts the right audience but also strengthens trust, engagement, and conversions over time.
          </p>
          <ul>
            <li>Increased organic visibility on Google</li>
            <li>Targeted and qualified traffic</li>
            <li>Enhanced brand authority and credibility</li>
            <li>Long-term consistent growth without excessive ad spend</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="seo-col">
          <img src={img2} alt="Professional SEO Company" className="seo-img" />
          <h3>Expert SEO for Every Industry</h3>
          <p>
            From small local businesses to large enterprises, our team delivers tailored SEO strategies that boost rankings, online presence, and lead generation.
          </p>
          <ul>
            <li>Comprehensive keyword research & competitor analysis</li>
            <li>On-page, technical, and content optimization</li>
            <li>High-quality link building & outreach</li>
            <li>Conversion-focused SEO planning</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="seo-col">
          <img src={img3} alt="Local SEO Canada" className="seo-img" />
          <h3>Local SEO for Targeted Growth</h3>
          <p>
            Our local SEO strategies ensure your business appears in Google Maps, local search results, and location-based queries, helping you attract nearby customers.
          </p>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Accurate local citations & NAP consistency</li>
            <li>City & region-specific keyword targeting</li>
            <li>Improved local search visibility</li>
          </ul>
        </div>

      </div>

      {/* Extra Content Section */}
      <h2>Your Trusted Professional SEO Partner in Canada</h2>
      <p>
        Leveraging years of experience and a data-driven approach, we provide custom SEO solutions tailored to your industry, business goals, and competitive landscape. 
        Our focus is long-term growth, measurable results, and full transparency.
      </p>

      <h3>Why Choose Our Professional SEO Services?</h3>
      <ul>
        <li>Tailored SEO strategies for your business objectives</li>
        <li>Detailed monthly reports with insights and transparency</li>
        <li>Dedicated support from experienced SEO specialists</li>
        <li>Proven results across multiple industries in Canada</li>
      </ul>

    </section>
  );
};

export default ProfessionalOverview;
