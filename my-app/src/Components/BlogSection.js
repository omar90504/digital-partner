import React from "react";
import "../Assets/css/BlogSection.css";
import { FaCalendar, FaFolder, FaCircleArrowRight, FaCircleDot } from "react-icons/fa6";

// ✅ Import images correctly from your Assets/images folder
import blogImg1 from "../Assets/images/blog-1.webp";
import blogImg2 from "../Assets/images/blog-2.webp";

const BlogSection = () => {
  const blogs = [
    {
      date: "April 14, 2025",
      category: "Social Media",
      title: "Mastering Instagram and Facebook Ads",
      description:
        "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
      image: blogImg1,
      link: "./single_post.html",
    },
    {
      date: "April 14, 2025",
      category: "SEO",
      title: "Growth Strategies for Digital Business",
      description:
        "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
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
            <h2 className="blog-title">Latest Digital Marketing Strategies & Tips</h2>
          </div>

          <div className="blog-header-right">
            <p>
              Explore our latest blog articles covering industry trends, expert insights,
              and actionable strategies to elevate your digital marketing game.
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
