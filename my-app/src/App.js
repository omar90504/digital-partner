import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import SEO from "./Pages/Seo";
import FooterSection from "./Components/Footer";
import "./App.css";
import MyAccount from "./Pages/My-Account";
import ShopNow from "./Pages/ShopNow";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/shop" element={<ShopNow />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
