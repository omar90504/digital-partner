import React from "react";
import "../Assets/css/Blog-HeroSection.css"; // your custom CSS


// ✅ Import blog images
import blog1 from "../Assets/images/dummy.jpg";
import blog2 from "../Assets/images/ecommerce.webp";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "April 14, 2025",
      category: "Social Media",
      title: "Mastering Instagram and Facebook Ads",
      desc: "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
      image: blog1,
      link: "/single-post",
    },
    {
      id: 2,
      date: "April 14, 2025",
      category: "SEO",
      title: "Growth Strategies for Digital Business",
      desc: "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
      image: blog2,
      link: "/single-post",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* === HEADER === */}
        <div className="blog-header">
          <div className="blog-intro">
            <div className="sub-heading">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Insights & Trends</span>
            </div>
            <h2 className="title-heading">
              Latest Digital Marketing Strategies & Tips
            </h2>
          </div>

          <div className="blog-summary">
            <p>
              Explore our latest blog articles covering industry trends, expert
              insights, and actionable strategies to elevate your digital
              marketing game.
            </p>
            <div className="link-wrapper">
              <a href="/blog" className="view-all">
                View All Articles
              </a>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        </div>

        {/* === BLOG GRID === */}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card"
              onClick={() => (window.location.href = blog.link)}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-body">
                <div className="meta-row">
                  <div className="meta-item">
                    <i className="fa-solid fa-calendar accent"></i>
                    <span>{blog.date}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fa-solid fa-folder accent"></i>
                    <span>{blog.category}</span>
                  </div>
                </div>
                <a href={blog.link} className="blog-title">
                  {blog.title}
                </a>
                <p>{blog.desc}</p>
                <a href={blog.link} className="read-more">
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
