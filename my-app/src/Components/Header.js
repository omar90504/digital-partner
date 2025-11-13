import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "../Assets/css/header.css";
import logo from "../Assets/images/logo.png";
import { FaPhoneVolume, FaBars, FaTimes } from "react-icons/fa";

export default function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Sticky Header Effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu when link clicked (mobile)
  const handleLinkClick = () => {
    if (window.innerWidth <= 992) setMenuOpen(false);
  };

  return (
    <>
      {/* Spacer for sticky header offset */}
      <div style={{ height: "70px" }}></div>

      <header className={`header ${darkMode ? "dark" : "light"}`}>
        {/* === LOGO === */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* === HAMBURGER ICON (Mobile) === */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* === NAVIGATION MENU === */}
        <nav className={`menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="/" onClick={handleLinkClick}>Home</a></li>
        <li className="has-submenu">
        <a href="/services" onClick={handleLinkClick}>Services</a>
        <ul className="submenu">
        <li><a href="/services/seo" onClick={handleLinkClick}>SEO</a></li>
        </ul>
        </li>  
        <li><a href="/shop" onClick={handleLinkClick}>Shop Now</a></li>
            <li><a href="/blogs" onClick={handleLinkClick}>Blogs</a></li>
            <li><a href="/contact" onClick={handleLinkClick}>Contact</a></li>
            <li><a href="/my-account" onClick={handleLinkClick}>My Account</a></li>
          </ul>
        </nav>

        {/* === RIGHT SECTION === */}
        <div className="right">
          {/* Dark / Light Mode Toggle */}
          <button className="icon-btn" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Call Button */}
          <div className="navbar-icon-wrapper">
            <div className="icon-circle">
              <FaPhoneVolume size={20} />
            </div>
            <h6>+1 (62) 987 7543</h6>
          </div>
        </div>
      </header>
    </>
  );
}
