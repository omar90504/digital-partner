import React from "react";
import "animate.css";
import "../Assets/css/ServicesSection.css";
import { Link } from "react-router-dom";

// ✅ Import service icons
import icon1 from "../Assets/images/Icon-7.png";
import icon2 from "../Assets/images/digital-marketing-icons-F4LJ4W8.png";
import icon3 from "../Assets/images/Icon-8.png";
import icon4 from "../Assets/images/Icon-5.png";
import icon5 from "../Assets/images/Icon-6.png";
import icon6 from "../Assets/images/Icon-4.png";
import icon7 from "../Assets/images/Icon-9.png";
import icon8 from "../Assets/images/Icon-10.png";
import icon9 from "../Assets/images/Icon-11.png";
import icon10 from "../Assets/images/Icon-12.png";
import icon11 from "../Assets/images/Icon-13.png";
import icon12 from "../Assets/images/Icon-14.png";

const ServicesSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Digital Marketing",
      desc: "Elevate your online presence with strategies tailored for your business. From SEO to social media campaigns, we connect your brand with the right audience and maximize engagement.",
    },
    {
      icon: icon2,
      title: "SEO (Search Engine Optimization)",
      desc: "Boost your website’s visibility and search rankings. Our expert SEO techniques drive organic traffic, improve online performance, and help you stand out in competitive markets.",
      link: "/our-services/seo",

    },
    {
      icon: icon3,
      title: "Local SEO",
      desc: "Capture more customers in your area with targeted local SEO solutions. Increase visibility in local searches and drive more foot traffic and conversions to your business.",
      link: "/our-services/seo/local-seo/",

    },
    {
      icon: icon4,
      title: "Social Media Marketing",
      desc: "Engage and grow your audience on all major platforms. We craft social media strategies that build brand loyalty, foster connections, and deliver measurable business growth.",
    },
    {
      icon: icon5,
      title: "Google Ads & PPC",
      desc: "Drive highly targeted traffic with expertly managed Google Ads campaigns. Our team optimizes for maximum ROI, clicks, and conversions.",
    },
    {
      icon: icon6,
      title: "Web Hosting",
      desc: "Reliable, secure, and fast hosting solutions that keep your website running smoothly. Enjoy seamless performance, uptime, and expert support.",
    },
    {
      icon: icon7,
      title: "Web Development",
      desc: "Transform your ideas into interactive, user-friendly websites. Our developers build responsive, high-performing websites that align with your brand and engage your audience.",
    },
    {
      icon: icon8,
      title: "Web Design",
      desc: "Make a lasting impression with visually stunning, intuitive web designs. Our design team ensures seamless navigation and a captivating user experience.",
    },
    {
      icon: icon9,
      title: "eCommerce Marketing",
      desc: "Boost your online store sales with data-driven strategies. Improve product visibility, user experience, and conversion rates to accelerate revenue growth.",
    },
    {
      icon: icon10,
      title: "Graphic Design & Branding",
      desc: "Create a strong brand identity with professional graphics. From logos to banners and marketing materials, we design visuals that resonate with your audience and strengthen your brand.",
    },
    {
      icon: icon11,
      title: "Link Building",
      desc: "Increase your website authority and search rankings with high-quality backlinks. Our strategic link-building approach improves visibility, credibility, and organic growth.",
    },
    {
      icon: icon12,
      title: "Content Writing",
      desc: "Enhance your online presence with SEO-optimized content. Our expert writers create engaging, keyword-focused content that drives traffic and boosts conversions.",
    },
  ];

  return (
    <section className="section services-section">
      <div className="hero-container">
        <div className="services-header animate__animated animate__fadeInDown">
          <div className="sub-heading">
            <i className="fa-regular fa-circle-dot"></i>
            <span>Our Services</span>
          </div>
          <h2 className="title-heading">
            Comprehensive Digital Marketing Solutions for Your Business
          </h2>
          <p className="services-intro">
            We provide a complete range of digital marketing services designed to grow your brand, attract the right audience, and drive measurable results.
          </p>
        </div>

        {/* === Services Grid === */}
        <div className="card-service-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className="card card-service animate__animated animate__fadeInLeft"
                key={index}
              >
                {/* Icon */}
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>

                {/* Title below icon */}
                <div className="service-title">
                  <h4>{service.title}</h4>
                </div>

                {/* Description */}
                <p>{service.desc}</p>

                {/* Button */}
                  <Link to={service.link} className="btn btn-accent">
  <div className="btn-title">
    <span>View Details</span>
  </div>
  <div className="icon-circle">
    <i className="fa-solid fa-arrow-right"></i>
  </div>
</Link>

              </div>
            ))}
          </div>
        </div>

        <div className="service-link-footer">
          <p>
            Need a custom solution? Let's create a strategy tailored for your business.{" "}
            <a href="./contact">Get a Free Strategy Call</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
