// Import required modules
const express = require("express");
const asyncHandler = require("express-async-handler");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @desc    Create a new checkout
// @route   POST /api/checkout
// @access  Private
router.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
   

    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!checkoutItems?.length) {
      return res.status(400).json({ message: "No items in checkout" });
    }

    const checkout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
    });

    res.status(201).json(checkout);
  })
);

// @desc    Mark checkout as paid
// @route   PUT /api/checkout/:id/pay
// @access  Private
router.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) return res.status(404).json({ message: "Checkout not found" });
    if (paymentStatus?.toLowerCase() !== "paid") {
      return res.status(400).json({ message: "Invalid payment status" });
    }

    checkout.isPaid = true;
    checkout.paymentStatus = "Paid";
    checkout.paymentDetails = paymentDetails;
    checkout.paidAt = Date.now();

    await checkout.save();
    res.json(checkout);
  })
);

// @desc    Finalize checkout and create order
// @route   POST /api/checkout/:id/finalize
// @access  Private
router.post(
  "/:id/finalize",
  protect,
  asyncHandler(async (req, res) => {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout)        return res.status(404).json({ message: "Checkout not found" });
    if (!checkout.isPaid) return res.status(400).json({ message: "Checkout is not paid" });
    if (checkout.isFinalized) {
      return res.status(400).json({ message: "Checkout already finalized" });
    }


    const order = await Order.create({
      user:            checkout.user,
      orderItems:      checkout.checkoutItems,
      shippingAddress: checkout.shippingAddress,
      paymentMethod:   checkout.paymentMethod,
      totalPrice:      checkout.totalPrice,
      isPaid:          true,
      paidAt:          checkout.paidAt,
      paymentStatus:   "Paid",
      paymentDetails:  checkout.paymentDetails,
      isDelivered:     false,
    });

    checkout.isFinalized = true;
    checkout.finalizedAt = Date.now();
    await checkout.save();

    await Cart.findOneAndDelete({ user: checkout.user });

    res.status(201).json(order);
  })
);

module.exports = router;
