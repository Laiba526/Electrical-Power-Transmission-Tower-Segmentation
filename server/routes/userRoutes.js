import express from "express";
import User from "../models/User.js";
import authenticate from '../authMiddleware.js'; // Import the authentication middleware

const router = express.Router();

// GET user by ID (protected route)
router.get("/:id", authenticate, async (req, res) => {
  console.log("GET /api/user/:id called with ID:", req.params.id);

  // Check if the ID in the route matches the user making the request
  if (req.params.id !== req.user.id) {
    return res.status(403).json({ message: "You are not authorized to view this profile." });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User found:", user);
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Error fetching user" });
  }
});

// Update user by ID (protected route)
router.put("/:id", authenticate, async (req, res) => {
  // Check if the ID in the route matches the user making the request
  if (req.params.id !== req.user.id) {
    return res.status(403).json({ message: "You are not authorized to update this profile." });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Error updating user" });
  }
});

export default router;
