import React from "react";

const BlogPost = ({ post }) => {
  if (!post) return <p>Post not found!</p>;

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "var(--bg, #f8f9fc)",
        color: "var(--text, #101010)",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}
    >
      {/* Title */}
      <h1 style={{ color: "var(--accent, #058bd4)", marginBottom: "10px" }}>
        {post.title}
      </h1>
      
      {/* Meta */}
      <p style={{ color: "var(--text-secondary, #555)", marginBottom: "25px" }}>
        <i>
          By {post.author} | {post.date}
        </i>
      </p>

      {/* Featured Image */}
      {post.featuredImage && (
        <div style={{ marginBottom: "25px" }}>
          <img
            src={post.featuredImage}
            alt={post.featuredAlt || post.title}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
            loading="lazy"
          />
        </div>
      )}

      {/* Content in 2 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          lineHeight: "1.8"
        }}
      >
        {/* If post.content is JSX */}
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
