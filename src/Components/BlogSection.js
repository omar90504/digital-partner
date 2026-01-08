import React from "react";
import "../Assets/css/BlogSection.css";
import { FaCalendar, FaFolder, FaCircleArrowRight, FaCircleDot } from "react-icons/fa6";

// Images
import blogImg1 from "../Assets/images/blog-1.webp";
import blogImg2 from "../Assets/images/blog-2.webp";

const BlogSection = () => {
  const blogs = [
    {
      date: "April 14, 2025",
      category: "Social Media",
      title: "Mastering Instagram & Facebook Ads",
      description:
        "Discover proven techniques to improve ad performance, reach the right audience, and increase conversions across Instagram and Facebook.",
      image: blogImg1,
      link: "./single_post.html",
    },
    {
      date: "April 14, 2025",
      category: "SEO",
      title: "Growth Strategies for Digital Businesses",
      description:
        "Learn effective SEO and marketing tactics that help businesses scale, attract more customers, and boost long-term online visibility.",
      image: blogImg2,
      link: "./single_post.html",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        
        {/* ===== Header Section ===== */}
        <div className="blog-header">
          <div className="blog-header-left">
            <div className="sub-heading">
              <FaCircleDot className="icon" />
              <span>Insights & Trends</span>
            </div>
            <h2 className="blog-title">
              Latest Digital Marketing Tips & Strategies
            </h2>
          </div>

          <div className="blog-header-right">
            <p>
              Stay updated with expert insights, industry trends, and practical strategies
              designed to help you grow your business online.
            </p>
            <div className="blog-link-wrapper">
              <a href="./blog.html" className="view-all">
                View All Articles
              </a>
              <FaCircleArrowRight className="icon" />
            </div>
          </div>
        </div>

        {/* ===== Blog Cards ===== */}
        <div className="blog-grid">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="blog-card"
              onClick={() => (window.location.href = post.link)}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-body">
                <div className="blog-meta">
                  <div className="meta-item">
                    <FaCalendar className="accent" />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <FaFolder className="accent" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <a href={post.link} className="blog-heading">
                  {post.title}
                </a>

                <p className="blog-description">{post.description}</p>

                <a href={post.link} className="read-more">
                  Read More
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
