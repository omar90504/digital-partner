import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import SinglePostPage from "./Pages/SinglePostPage";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import SEO from "./Pages/Seo";
import Vancouver from "./Pages/Vancouver";
import Toronto from "./Pages/Toronto";
import SEOServiceCanada from "./Pages/SeoSeviceCanada";
import ProfessionalSEOServices from "./Pages/ProfessionalSeoServices";
import FooterSection from "./Components/Footer";
import "./App.css";
import MyAccount from "./Pages/My-Account";
import ShopNow from "./Pages/ShopNow";
import Canada from "./Pages/Canada";
import LocalSeo from "./Pages/LocalSeo";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundAndReturn from "./Pages/RefundReturnsPolicy";
import OnPageSEOServices from "./Pages/OnPageSEOServices";
import ScrollToTop from "./Components/ScrollToTop";


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
      <ScrollToTop />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/seo" element={<SEO />} />
        <Route path="/our-services/seo/seo-service-canada" element={<SEOServiceCanada />} />
        <Route path="/our-services/seo/professional-seo-services" element={<ProfessionalSEOServices />} />
        <Route path="/our-services/seo/local-seo" element={<LocalSeo />} />
        <Route path="/our-services/seo/on-page-seo-services" element={<OnPageSEOServices />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/canada/vancouver" element={<Vancouver />} />
        <Route path="/canada/toronto" element={<Toronto />} />
        <Route path="/shop" element={<ShopNow />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-and-returns-policy" element={<RefundAndReturn />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<SinglePostPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
