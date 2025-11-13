import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import "../Assets/css/Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"); // ⚠️ Your Stripe public key

const CheckoutForm = ({ cart, total, clearCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (cart.length === 0) return alert("Your cart is empty 🛒");

    setLoading(true);
    try {
      // Create Payment Intent from backend
      const { data } = await axios.post("http://localhost:5000/api/payments/create-payment-intent", {
        total,
      });

      // Confirm card payment
      const cardElement = elements.getElement(CardElement);
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { name: form.name, email: form.email },
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("✅ Payment Successful!");
        clearCart();
        setForm({ name: "", email: "", business: "" });
      }
    } catch (err) {
      console.error(err);
      alert("❌ Payment failed");
    }
    setLoading(false);
  };

  return (
    <div className="checkout-card">
      <h2>Checkout</h2>

      {/* Product Summary */}
      <div className="checkout-products">
        <h3>Your Products:</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <span><strong>ID:</strong> {item.id}</span><br />
                <span><strong>Title:</strong> {item.title}</span><br />
                <span><strong>Price:</strong> ${item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <p className="checkout-total">
        <strong>Total:</strong> ${total.toFixed(2)}
      </p>

      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Full Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Email Address</label>
        <input
          type="email"
          required
          placeholder="example@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Card Details</label>
        <div className="card-element-wrapper">
          <CardElement options={{ style: { base: { fontSize: "16px", color: "white" } } }} />
        </div>

        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
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
