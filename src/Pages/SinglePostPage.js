// src/pages/SinglePostPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../Data/Posts";

const SinglePostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <style>
        {`
          :root {
  --bg: #f8f9fc;
  --text-primary: #101010;
  --text-secondary: #646464;
  --accent: #058bd4;
  --card-bg: #ffffff;
}

[data-theme="dark"] {
  --bg: #000000;
  --text-primary: #e6eef8;
  --text-secondary: #a0a0a0;
  --accent: #3aa0ff;
  --card-bg: #1e1e1e;
}
          .single-post {
            max-width: 900px;
            margin: 60px auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            background: var(--bg);
            color: var(--text);
            border-radius: 12px;
          }

          .single-post h1 {
            font-size: 32px;
            margin-bottom: 15px;
            color: var(--accent);
          }

          .post-meta {
            color: var(--text-secondary);
            font-size: 14px;
            margin-bottom: 25px;
          }

          .featured-image img {
            width: 100%;
            border-radius: 12px;
            margin: 25px 0;
            box-shadow: 0 10px 25px var(--card-shadow);
          }

          .post-content h2 {
            font-size: 24px;
            margin-top: 30px;
            color: var(--accent);
          }

          .post-content h3 {
            font-size: 20px;
            margin-top: 25px;
            color: var(--accent);
          }

          .post-content p {
            line-height: 1.8;
            margin-bottom: 16px;
            color: var(--text);
          }
        `}
      </style>

      <article className="single-post">
        <h1>{post.title}</h1>

        <div className="post-meta">
          <span>By {post.author}</span> | <span>{post.date}</span>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="featured-image">
            <img
              src={post.featuredImage}
              alt={post.featuredAlt}
              loading="lazy"
            />
          </div>
        )}

        <div className="post-content">{post.content}</div>
      </article>
    </>
  );
};

export default SinglePostPage;
