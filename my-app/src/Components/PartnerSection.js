import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../Assets/css/PartnerSection.css";
import "animate.css";

// ✅ Import logos
import client1Light from "../Assets/images/client-1.png";
import client1Dark from "../Assets/images/client-1-dark.png";
import client2Light from "../Assets/images/client-2.png";
import client2Dark from "../Assets/images/client-2-dark.png";
import client3Light from "../Assets/images/client-3.png";
import client3Dark from "../Assets/images/client-3-dark.png";
import client4Light from "../Assets/images/client-4.png";
import client4Dark from "../Assets/images/client-4-dark.png";
import client5Light from "../Assets/images/client-5.png";
import client5Dark from "../Assets/images/client-5-dark.png";
import client6Light from "../Assets/images/client-6.png";
import client6Dark from "../Assets/images/client-6-dark.png";
import client7Light from "../Assets/images/client-7.png";
import client7Dark from "../Assets/images/client-7-dark.png";
import client8Light from "../Assets/images/client-8.png";
import client8Dark from "../Assets/images/client-8-dark.png";

const PartnerSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Detect dark mode via data-theme attribute on <html> or <body>
  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") ||
      document.body.getAttribute("data-theme");
    setIsDarkMode(currentTheme === "dark");

    const observer = new MutationObserver(() => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") ||
        document.body.getAttribute("data-theme");
      setIsDarkMode(newTheme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Light mode → use dark logo (e.g., `*-dark.png`)
  // ✅ Dark mode → use light logo (e.g., normal `*.png`)
  const partners = [
    { light: client1Light, dark: client1Dark },
    { light: client2Light, dark: client2Dark },
    { light: client3Light, dark: client3Dark },
    { light: client4Light, dark: client4Dark },
    { light: client5Light, dark: client5Dark },
    { light: client6Light, dark: client6Dark },
    { light: client7Light, dark: client7Dark },
    { light: client8Light, dark: client8Dark },
  ];

  return (
    <section className="partner-section">
      <div className="partner-wrap animate__animated animate__fadeInRight">
        <div className="partner-header">
          <h3 className="partner-title">Powering Success for Top Brands</h3>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula,
            varius at rutrum et, finibus sed felis. Quisque eget tincidunt lectus.
            Sed quis diam sed neque mattis feugiat.
          </p>
        </div>

        <div className="partner-slider">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
            className="partner-swiper"
          >
            {partners.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="partner-slide">
                  <img
                    src={isDarkMode ? logo.light : logo.dark}
                    alt={`Client-${index}`}
                    className="partner-logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
