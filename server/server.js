import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";


// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express app
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Test server route
app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

// ✅ Test DB connection route
app.get("/test-db", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const dbState = mongoose.connection.readyState;
  res.json({
    message: "MongoDB connection test",
    state: states[dbState],
  });
});

app.use("/api/newsletter", newsletterRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
