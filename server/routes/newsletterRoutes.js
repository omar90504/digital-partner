import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

// Subscribe route
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    // Check if already subscribed
    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "Email already subscribed." });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    res.status(200).json({ message: "✅ Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default router;
