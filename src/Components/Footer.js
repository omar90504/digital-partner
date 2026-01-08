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
            {/* ===== Column 1: Brand Info ===== */}
            <div className="footer-col">
              <div className="footer-logo-block">
                <img src={logo} alt="Digital Partner Logo" className="footer-logo" />
                <p className="footer-text">
                  Digital Partner is a results-driven digital marketing agency in Canada,
                  helping businesses grow through SEO, Google Ads, social media marketing,
                  and conversion-focused strategies.
                </p>
              </div>
            </div>

            {/* ===== Column 2: Quick Links ===== */}
            <div className="footer-col">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-list">
                <li><a href="/">Home</a></li>
                <li><a href="/our-services">Services</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/my-account">My Account</a></li>
              </ul>
            </div>

            {/* ===== Column 3: Services ===== */}
            <div className="footer-col">
              <h5 className="footer-title">Our Services</h5>
              <ul className="footer-list">
  <li>
    <a href="/our-services/seo">SEO</a>
  </li>

  <li>
    <a href="/our-services/seo/seo-service-canada/">
      SEO Service Canada
    </a>
  </li>

  <li>
    <a href="/our-services/seo/professional-seo-services/">
      Professional SEO Services
    </a>
  </li>

  <li>
    <a href="/our-services/seo/local-seo/">
      Local SEO
    </a>
  </li>

  <li>
    <a href="/our-services/seo/on-page-seo-services/">
      On-Page SEO Services
    </a>
  </li>
</ul>

            </div>

            {/* ===== Column 4: Contact + Social ===== */}
            <div className="footer-col">
              <h5 className="footer-title">Contact Information</h5>
              <ul className="footer-contact">
                <li><a href="mailto:info@digitalpartner.ca" style={{textDecoration: "none"}}>📧 info@digitalpartner.ca</a></li>
                <li><a href="tel:+19597775007" style={{textDecoration: "none" }}>📞 (+1) 959-777-5007</a></li>
                <li>📍 1 todd drive, north haven, CT, 06473, United States</li>
              </ul>

              <div className="footer-social-block">
                <h5 className="footer-title">Follow Us</h5>
                <div className="social-icons">
                  <a href="https://www.facebook.com/digitalpartner.ca" target="_blank" rel="noreferrer" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/digitalpartnerllc/" target="_blank" rel="noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Bottom Bar ===== */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Digital Partner. All Rights Reserved.</span>
            <div className="footer-links">
              <a href="/refund-and-returns-policy/">Refund and Returns Policy</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
