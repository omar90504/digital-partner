import React, { useContext } from "react";
import "../Assets/css/ProductList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

// ====== Images ======
import hosting1 from "../Assets/images/hosting1.jpg";
import hosting2 from "../Assets/images/hosting2.webp";
import hosting3 from "../Assets/images/hosting3.webp";
import googleAds from "../Assets/images/google-ads.webp";
import gmbExec from "../Assets/images/gmb-exec.webp";
import gmbPremium from "../Assets/images/gmb-premium.webp";
import gmbStandard from "../Assets/images/gmb-standard.webp";
import logoDesign from "../Assets/images/logo-design.webp";
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

// ====== Product Data ======
const products = [
  { id: "p1", title: "1 Year Hosting Plan", price: 150, originalPrice: 150, salePrice: 120, image: hosting1 },
  { id: "p2", title: "2 Year Hosting Plan", price: 250, originalPrice: 250, salePrice: 200, image: hosting2 },
  { id: "p3", title: "3 Year Hosting Plan", price: 250, image: hosting3 },
  { id: "p4", title: "Google Ads Management", price: 150, image: googleAds },
  { id: "p5", title: "Google My Business Executive Plan", price: 300, image: gmbExec },
  { id: "p6", title: "Google My Business Premium Plan", price: 500, originalPrice: 500, salePrice: 450, image: gmbPremium },
  { id: "p7", title: "Google My Business Standard Plan", price: 250, originalPrice: 250, salePrice: 200, image: gmbStandard },
  { id: "p8", title: "Logo Design", price: 20, originalPrice: 20, salePrice: 10, image: logoDesign },
  { id: "p9", title: "SEO Executive Plan", price: 600, image: seoExec },
  { id: "p10", title: "SEO Premium Plan", price: 800, image: seoPremium },
  { id: "p11", title: "SEO Standard Plan", price: 400, image: seoStandard },
  { id: "p12", title: "Social Media Marketing Executive Plan", price: 300, image: smmExec },
  { id: "p13", title: "Social Media Marketing Premium Plan", price: 400, image: smmPremium },
  { id: "p14", title: "Social Media Marketing Standard Plan", price: 250, originalPrice: 250, salePrice: 200, image: smmStandard },
  { id: "p15", title: "Website Development Ecommerce Store", price: 1000, image: webEcom },
  { id: "p16", title: "Website Development Executive Plan", price: 500, image: webExec },
  { id: "p17", title: "Website Development Premium Plan", price: 750, image: webPre },
  { id: "p18", title: "Website Development Standard Plan", price: 300, image: webStand },
];

// ====== Product Card ======
const ProductCard = ({ product, isInCart, onAdd, onGoToCart }) => {
  const { title, price, originalPrice, salePrice, image } = product;

  const handleAdd = () => {
    onAdd(product);
    toast.success(`${title} added to cart 🛒`);
  };

  return (
    <div className="product-card">
      <div className="image-wrap">
        <img src={image} alt={title} className="product-image" />
        {salePrice && <div className="sale-badge">Sale!</div>}
      </div>

      <div className="product-content">
        <h3>{title}</h3>

        {salePrice ? (
          <p className="price">
            <span className="original-price">CA${originalPrice.toFixed(2)}</span>
            <span className="sale-price">CA${salePrice.toFixed(2)}</span>
          </p>
        ) : (
          <p className="price">CA${price.toFixed(2)}</p>
        )}

        <button
          className="add-to-basket"
          onClick={isInCart ? onGoToCart : handleAdd}
        >
          {isInCart ? "In Cart" : "Add to Basket"}
        </button>
      </div>
    </div>
  );
};

// ====== Product List ======
const ProductList = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isProductInCart = (id) => cart.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    navigate("/cart"); // 👈 redirect to cart after adding
  };

  const handleGoToCart = () => {
    navigate("/cart"); // 👈 go to cart if already in cart
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={isProductInCart(product.id)}
          onAdd={handleAddToCart}
          onGoToCart={handleGoToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
