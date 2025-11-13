import React, { useState } from "react";
import axios from "axios";
import "../Assets/css/MyAccount.css";
import userAvatar from "../Assets/images/Photo-2.jpg";

const Account = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ check if user logged in

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const url =
        activeTab === "login"
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/signup";

      const response = await axios.post(url, formData);
      setMessage(response.data.message);

      // ✅ If login is successful, show dashboard
      if (activeTab === "login" && response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ name: "", email: "", password: "" });
    setActiveTab("login");
  };

  // ✅ Dashboard view after login
  if (isLoggedIn) {
    return (
      <section className="dashboard">
        <div className="dashboard-wrapper">
          <div className="dashboard-avatar">
            <img src={userAvatar} alt="User Avatar" className="dashboard-img" />
            <h3>Welcome, {formData.name || "User"} 👋</h3>
          </div>

          <ul className="dashboard-menu">
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Downloads</li>
            <li>Addresses</li>
            <li>Payment Methods</li>
            <li>Account Details</li>
            <li onClick={handleLogout} className="logout-btn">
              Log Out
            </li>
          </ul>
        </div>
      </section>
    );
  }

  // ✅ Login/Signup form
  return (
    <section className="account">
      <div className="account-wrapper">
        <div className="account-avatar">
          <img src={userAvatar} alt="User Avatar" className="account-img" />
        </div>

        <h2 className="account-title">
          {activeTab === "login" ? "Login to Your Account" : "Create an Account"}
        </h2>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        <form className="account-form fade-in" onSubmit={handleSubmit}>
          {activeTab === "signup" && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="account-btn">
            {activeTab === "login" ? "Login" : "Create Account"}
          </button>

          {message && <p className="form-note">{message}</p>}

          <p className="form-note">
            {activeTab === "login" ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setActiveTab("signup")} className="link-text">
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setActiveTab("login")} className="link-text">
                  Login
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Account;
