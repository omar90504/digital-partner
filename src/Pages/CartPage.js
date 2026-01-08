import React, { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/css/CartPage.css";

const CartPage = () => {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ Calculate total safely (string / null proof)
  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = Number(item.salePrice ?? item.price ?? 0);
      const qty = Number(item.qty ?? 1);
      return sum + price * qty;
    }, 0);
  }, [cart]);

  // ✅ Empty cart UI
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate("/shop")} className="btn-primary">
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cart.map((item) => {
          const price = Number(item.salePrice ?? item.price ?? 0);
          const qty = Number(item.qty ?? 1);

          return (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img"
              />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>CA${price.toFixed(2)}</p>
              </div>

              <input
                type="number"
                min="1"
                value={qty}
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
          );
        })}
      </div>

      <div className="cart-summary">
        <h3>
          Total: <span>CA${total.toFixed(2)}</span>
        </h3>

        <Link to="/checkout">
          <button className="btn-primary">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
