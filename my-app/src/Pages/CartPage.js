// src/pages/CartPage.jsx
import React, { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/css/CartPage.css";

const CartPage = () => {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ Calculate total dynamically
  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = item.salePrice || item.price;
      return sum + price * (item.qty || 1);
    }, 0);
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate("/shop")} className="btn-primary">
          Go to Shop
        </button>
      </div>
    );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-img" />
            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>CA${(item.salePrice || item.price).toFixed(2)}</p>
            </div>

            <input
              type="number"
              min="1"
              value={item.qty || 1}
              onChange={(e) =>
                updateQty(item.id, Math.max(1, Number(e.target.value)))
              }
              className="cart-qty"
            />

            <button
              onClick={() => removeFromCart(item.id)}
              className="btn-remove"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: <span>CA${total.toFixed(2)}</span></h3>
        <Link to="/checkout">
          <button className="btn-primary">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
