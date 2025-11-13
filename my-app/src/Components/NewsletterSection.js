import React, { useState } from "react";
import "../Assets/css/NewsletterSection.css";
import { FaCheck, FaXmark, FaArrowRight } from "react-icons/fa6";
import axios from "axios";

const NewsletterSection = () => {
  const [status, setStatus] = useState(""); // "success", "error", or ""
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await axios.post("http://localhost:5000/api/newsletter", {
        email,
      });
      setStatus("success");
      setEmail(""); // clear input
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000); // hide after 3 seconds
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h3 className="newsletter-title">Stay Ahead in Digital Marketing</h3>
          <p className="newsletter-subtitle">
            Get exclusive insights, trends, and strategies delivered straight to your inbox. Subscribe now!
          </p>

          {status === "success" && (
            <div className="newsletter-alert success">
              <FaCheck className="icon" />
              <p>Thank you! Subscribed successfully.</p>
            </div>
          )}

          {status === "error" && (
            <div className="newsletter-alert error">
              <FaXmark className="icon" />
              <p>Oops! Subscription failed. Try again.</p>
            </div>
          )}

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Give your best email"
              required
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-button">
              <span>Subscribe</span>
              <FaArrowRight className="arrow-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
