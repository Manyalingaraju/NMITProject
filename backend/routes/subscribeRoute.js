const express = require("express");
const router = express.Router();
const Subscribe = require("../models/Subscribe");

// @route   POST /api/subscribe
// @desc    Handle newsletter subscription
// @access  Public
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email is already subscribed
    let subscribe = await Subscribe.findOne({ email });

    if (subscribe) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // create the new subscriber
    subscribe = new Subscribe({ email });
    await subscribe.save();

    res.status(201).json({ message: "Successfully subscribed to the news letter!" });
  } catch (error) {
    console.error("Subscription error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
