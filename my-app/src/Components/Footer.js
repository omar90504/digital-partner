import React from "react";
import "../Assets/css/Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../Assets/images/logo.png";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg">
        <div className="footer-container">
          <div className="footer-grid">
            {/* ====== Column 1: Logo & Description ====== */}
            <div className="footer-col">
              <div className="footer-logo-block">
                <img src={logo} alt="Logo" className="footer-logo" />
                {/* <h4 className="footer-heading">
                  Driving Digital Growth with Innovation & Strategy
                </h4> */}
                <p className="footer-text">
                  Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus
                  nec ullamcorper mattis pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* ====== Column 2: Quick Links ====== */}
            <div className="footer-col">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-list">
                <li><a href="./">Home</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./service.html">Service</a></li>
                <li><a href="./case_studies.html">Case Studies</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
              </ul>
            </div>

            {/* ====== Column 3: Services ====== */}
            <div className="footer-col">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-list">
                <li><a href="./single_services.html">Social Media Marketing</a></li>
                <li><a href="./single_services.html">SEO Optimization</a></li>
                <li><a href="./single_services.html">PPC Advertising</a></li>
                <li><a href="./single_services.html">Content Marketing</a></li>
                <li><a href="./single_services.html">Branding Strategy</a></li>
                <li><a href="./single_services.html">Email Marketing</a></li>
              </ul>
            </div>

            {/* ====== Column 4: Contact Info & Socials ====== */}
            <div className="footer-col">
              <h5 className="footer-title">Contact Info</h5>
              <ul className="footer-contact">
                <li>hello@markoagency.com</li>
                <li>+1 234 567 890</li>
                <li>123 Digital Street, New York, USA</li>
              </ul>

              <div className="footer-social-block">
                <h5 className="footer-title">Social Media</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" className="social-link"><FaFacebook /></a>
                  <a href="https://youtube.com" className="social-link"><FaYoutube /></a>
                  <a href="https://instagram.com" className="social-link"><FaInstagram /></a>
                  <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>

          {/* ====== Copyright Row ====== */}
          <div className="footer-bottom">
            <span>© 2025 Marko. Fox Creation All Rights Reserved.</span>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
