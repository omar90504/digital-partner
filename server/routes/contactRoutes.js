import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// ✅ Save contact form data to MongoDB
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    await newContact.save();
    res.status(200).json({ message: "✅ Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Something went wrong while saving message." });
  }
});

// ✅ Get all contact messages (optional, for admin panel)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

export default router;
