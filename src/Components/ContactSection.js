import React, { useState } from "react";
import "../Assets/css/Contact-section.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.error || "Something went wrong!"}`);
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section className="section">
      <div className="hero-container">
        <div className="contact-grid">
          {/* LEFT SIDE */}
          <div className="contact-card">
            <div className="sub-heading">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Reach out to us</span>
            </div>
            <h2 className="title-heading">Get in Touch</h2>
            <p>Reach out to us for tailored digital solutions that drive results.</p>

            <div className="contact-item">
              <div className="icon-box">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact-text">
                <span>Phone Number</span>
                <a href="tel:+19597775007" style={{textDecoration: "none"}}>
                <h5>(+1) 959-777-5007</h5></a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-text">
                <span>Email Address</span>
                <a href="mailto:info@digitalpartner.ca" style={{textDecoration: "none"}}>
                <h5>info@digitalpartner.ca</h5></a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-text">
                <span>Office Address</span>
                <h5>1 todd drive, north haven, CT, 06473, United States</h5>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="form-card">
            <h3 className="title-heading">Let's Talk About Your Next Project</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div className="form-grid">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn-accent">
                <span>Send a Message</span>
                <span className="icon-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
              {status && <p className="form-note">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
