// routes/adminRoutes.js
const express = require("express");
const User = require("../models/user");
const { protect, admin } = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/admin/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
// @route   POST /api/admin/users
// @desc    Create a new user (admin only)
// @access  Private/Admin
router.post("/admin/users", protect, admin, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Validate role
    if (!["admin", "customer"].includes(role)) {
      return res.status(400).json({ message: "Invalid role. Must be 'admin' or 'customer'" });
    }

    // Hash password manually (since we are creating user via `new User().save()`)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const createdUser = await user.save();
    res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
    });

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
//@route Put /api/admin/users/:id
//@desc Update user information (admin only )-name ,email,role
//@access Private/Admin
router.put("/admin/users/:id", protect, admin, async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Validate role
    if (role && !["admin", "customer"].includes(role)) {
      return res.status(400).json({ message: "Invalid role. Must be 'admin' or 'customer'" });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    });

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// @route   DELETE /api/admin/users/:id
// @desc    Delete a user
// @access  Private/Admin
router.delete("/admin/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
