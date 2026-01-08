import React, { useContext } from "react";
import "../Assets/css/PricingPlans.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

// ====== Service Data with Images ======
import hosting1 from "../Assets/images/hosting1.jpg";
import hosting2 from "../Assets/images/hosting2.webp";
import hosting3 from "../Assets/images/hosting3.webp";
import gmbExec from "../Assets/images/gmb-exec.webp";
import gmbPremium from "../Assets/images/gmb-premium.webp";
import gmbStandard from "../Assets/images/gmb-standard.webp";
import seoExec from "../Assets/images/seo-exec.webp";
import seoPremium from "../Assets/images/seo-premium.webp";
import seoStandard from "../Assets/images/seo-standard.webp";
import smmExec from "../Assets/images/smm-exec.webp";
import smmPremium from "../Assets/images/smm-premium.webp";
import smmStandard from "../Assets/images/smm-standard.webp";
import webEcom from "../Assets/images/web-ecom-300x300.webp";
import webExec from "../Assets/images/web-exec.webp";
import webPre from "../Assets/images/web-premium-updated-300x300.webp";
import webStand from "../Assets/images/web-standard-updated-300x300.webp";

const services = [
  {
    field: "Hosting Plans",
    description: "We provide fast, secure, and reliable hosting at highly affordable prices.",
    packages: [
      { id: "p1", name: "1 Year Hosting Plan — Sale", price: 120, oldPrice: 150, image: hosting1, details: ["Affordable & reliable hosting", "Smooth website performance"] },
      { id: "p2", name: "2 Year Hosting Plan — Sale", price: 200, oldPrice: 250, image: hosting2, details: ["Save more long-term", "High stability & uptime"] },
      { id: "p3", name: "3 Year Hosting Plan", price: 250, image: hosting3, details: ["Maximum long-term value", "Reliable & secure hosting"] }
    ]
  },
  {
    field: "Google My Business Plans",
    description: "Boost your local visibility with our high-performing GMB plans.",
    packages: [
      { id: "p4", name: "GMB Standard Plan — Sale", price: 200, oldPrice: 250, image: gmbStandard, details: ["Local presence improvement", "Optimized business listing"] },
      { id: "p5", name: "GMB Executive Plan", price: 300, image: gmbExec, details: ["Advanced optimization", "Higher customer engagement"] },
      { id: "p6", name: "GMB Premium Plan — Sale", price: 450, oldPrice: 500, image: gmbPremium, details: ["Full GMB management", "Maximum local growth"] }
    ]
  },
  {
    field: "SEO Plans",
    description: "Improve search rankings & drive organic traffic.",
    packages: [
      { id: "p7", name: "SEO Standard Plan", price: 400, image: seoStandard, details: ["Beginner SEO optimization", "Keyword targeting"] },
      { id: "p8", name: "SEO Executive Plan", price: 600, image: seoExec, details: ["Advanced SEO strategies", "Better rankings & traffic"] },
      { id: "p9", name: "SEO Premium Plan", price: 800, image: seoPremium, details: ["Full-scale SEO optimization", "Maximum visibility"] }
    ]
  },
  {
    field: "Social Media Marketing Plans",
    description: "Grow your brand & engage your audience.",
    packages: [
      { id: "p10", name: "SMM Standard Plan — Sale", price: 200, oldPrice: 250, image: smmStandard, details: ["Starter-level SMM", "Basic engagement"] },
      { id: "p11", name: "SMM Executive Plan", price: 300, image: smmExec, details: ["Consistent content posting", "Audience engagement"] },
      { id: "p12", name: "SMM Premium Plan", price: 400, image: smmPremium, details: ["Full management strategy", "High-performance growth"] }
    ]
  },
  {
    field: "Web Development Plans",
    description: "Modern, responsive & business-focused web solutions.",
    packages: [
      { id: "p13", name: "Standard Website Plan", price: 300, image: webStand, details: ["Small business website", "Responsive design"] },
      { id: "p14", name: "Executive Website Plan", price: 500, image: webExec, details: ["Feature-rich web design", "Brand-focused design"] },
      { id: "p15", name: "Premium Website Plan", price: 750, image: webPre, details: ["Premium features", "Fully customized website"] },
      { id: "p16", name: "Ecommerce Store Development", price: 1000, image: webEcom, details: ["Complete ecommerce website", "Product & payment integration"] }
    ]
  }
];

const PricingPlans = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAdd = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart 🛒`);
    navigate("/cart"); // optional: navigate immediately after add
  };

  const handleGoToCart = () => navigate("/cart");

  return (
    <div className="pricing-section">
      <div className="pricing-header text-center">
        <div className="sub-heading">
          <i className="fa-regular fa-circle-dot"></i>
          <span>Our Services & Pricing</span>
        </div>
        <h2 className="title-heading">Choose the Perfect Plan for Your Business</h2>
      </div>

      {services.map((service) => (
        <div key={service.field} className="service-block">
          <div className="pricing-card highlight-card">
            <h4>{service.field}</h4>
            <p>{service.description}</p>
          </div>

          <div className="plans-row">
            {service.packages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                plan={pkg}
                isInCart={isInCart(pkg.id)}
                onAdd={() => handleAdd(pkg)}
                onGoToCart={handleGoToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PricingCard = ({ plan, isInCart, onAdd, onGoToCart }) => {
  return (
    <div className="pricing-card plan-box">
      <img src={plan.image} alt={plan.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }} />
      <div className="pricing-main">
        <h4>{plan.name}</h4>
        <div className="price">
          {plan.oldPrice && <span className="old-price">CA${plan.oldPrice}</span>}
          <h3>CA${plan.price}</h3>
        </div>
        <button className="btn-accent" onClick={isInCart ? onGoToCart : onAdd}>
          {isInCart ? "In Cart" : "Add to Basket"}
        </button>

        <ul className="check-list">
          {plan.details.map((d, i) => (
            <li key={i}>
              <i className="fa-solid fa-circle-check"></i>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPlans;
