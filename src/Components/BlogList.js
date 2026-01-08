import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts }) => {
  const styles = {
    blogHeader: {
      maxWidth: "1000px",
      margin: "40px auto 20px",
      padding: "0 20px",
    },
    subHeading: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#058bd4",
    },
    subHeadingIcon: {
      marginRight: "8px",
    },
    titleHeading: {
      fontSize: "2rem",
      marginBottom: "15px",
    },
    blogSummary: {
      marginBottom: "20px",
      color: "#555",
    },
    linkWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    viewAllLink: {
      color: "#058bd4",
      fontWeight: "bold",
      textDecoration: "none",
    },
    blogGrid: {
      maxWidth: "1000px",
      margin: "20px auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      fontFamily: "Arial, sans-serif",
    },
    blogCard: {
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 5px 20px rgba(5, 139, 212, 0.25)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.2s",
    },
    blogCardHover: {
      transform: "translateY(-5px)",
    },
    featuredImage: {
      width: "100%",
      height: "200px",
      overflow: "hidden",
    },
    featuredImageImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    postInfo: {
      padding: "15px",
    },
    postTitle: {
      color: "#058bd4",
      marginBottom: "10px",
      fontSize: "1.25rem",
    },
    postSummary: {
      color: "#555",
      marginBottom: "15px",
    },
    readMore: {
      color: "#058bd4",
      fontWeight: "bold",
      textDecoration: "none",
    },
  };

  return (
    <>
      {/* ===== Blog Header ===== */}
      <div style={styles.blogHeader}>
        <div style={styles.subHeading}>
          <i className="fa-regular fa-circle-dot" style={styles.subHeadingIcon}></i>
          <span>Insights & Trends</span>
        </div>
        <h2 style={styles.titleHeading}>
          Latest Digital Marketing Strategies & Tips
        </h2>

        <p style={styles.blogSummary}>
          Explore our latest blog articles covering industry trends, expert
          insights, and actionable strategies to elevate your digital
          marketing game.
        </p>

        <div style={styles.linkWrapper}>
          <a href="/blogs" style={styles.viewAllLink}>View All Articles</a>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </div>
      </div>

      {/* ===== Blog Grid ===== */}
      <div style={styles.blogGrid}>
        {posts.map((post) => (
          <div key={post.id} style={styles.blogCard}>
            {post.featuredImage && (
              <div style={styles.featuredImage}>
                <img
                  src={post.featuredImage}
                  alt={post.featuredAlt || post.title}
                  style={styles.featuredImageImg}
                  loading="lazy"
                />
              </div>
            )}

            <div style={styles.postInfo}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              {post.summary && <p style={styles.postSummary}>{post.summary}</p>}
              <Link to={`/blog/${post.slug}`} style={styles.readMore}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
