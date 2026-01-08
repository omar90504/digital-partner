import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // 👈 check this path
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        <App />
        <ToastContainer position="top-right" />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
);
