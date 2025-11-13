import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

// 🧩 Create a new order
router.post("/", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json({ success: true, message: "✅ Order saved!", data: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "❌ Failed to save order" });
  }
});

// 🧩 Get all orders (for admin view)
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

export default router;

