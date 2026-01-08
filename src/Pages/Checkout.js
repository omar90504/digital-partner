// src/pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import "../Assets/css/Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LroHfGYQ3Ms2Ox6APUfQTm39KoXeaY1n3MYGThz1lUimhi27BhFXMe7UHX13sv7agtaMN5n5z72kHFZGhTsQmbF00QO4rSlMS"
);

const CheckoutForm = ({ cart, total, clearCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (cart.length === 0) return alert("Your cart is empty 🛒");

    setLoading(true);
    setPaymentStatus("");

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/create-payment-intent",
        {
          amount: Math.round(parseFloat(total) * 100),
          currency: "cad",
        }
      );

      const cardElement = elements.getElement(CardElement);

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: form.name,
            email: form.email,
          },
        },
      });

      if (result.error) {
        setPaymentStatus("error");
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setPaymentStatus("success");
        clearCart();
        setForm({ name: "", email: "" });
        alert("✅ Payment Successful!");
      }
    } catch (err) {
      console.error(err);
      setPaymentStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="checkout-card">
      <h2>Checkout</h2>

      {/* 🛒 Products */}
      <div className="checkout-products">
        <h3>Your Products</h3>

        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout-item with-image">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="checkout-item-img"
                />

                {/* DETAILS */}
                <div className="checkout-item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <p className="checkout-total">
        <strong>Total:</strong> ${parseFloat(total).toFixed(2)}
      </p>

      {/* 💳 FORM */}
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Full Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Email Address</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Card Details</label>
        <div className="card-element-wrapper">
          <CardElement />
        </div>

        <button type="submit" disabled={!stripe || loading} className="pay-btn">
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {paymentStatus === "success" && (
          <p className="payment-status success">Payment Successful ✅</p>
        )}
        {paymentStatus === "error" && (
          <p className="payment-status error">Payment Failed ❌</p>
        )}
      </form>
    </div>
  );
};

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} total={total} clearCart={clearCart} />
      </Elements>
    </div>
  );
};

export default Checkout;
