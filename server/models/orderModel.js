import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  business: String,
  total: Number,
  cart: Array,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
