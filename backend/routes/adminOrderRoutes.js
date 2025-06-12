const express = require("express");
const Order = require("../models/Order");
const {protect,admin}=require("../middleware/authMiddleware");

const router =express.Router();

// @route   GET /api/admin/orders
// @desc    Get all orders (Admin only)
// @access  Private/Admin
router.get("/admin/orders", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// @route   PUT /api/admin/orders/:id
// @desc    Update order status
// @access  Private/Admin
router.put("/orders/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      const isDelivered = req.body.status === "Delivered";
      order.isDelivered = isDelivered;
      order.isDeliverd = isDelivered; // fallback
      order.deliveredAt = isDelivered ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
// @route   DELETE /api/admin/orders/:id
// @desc    Delete an order
// @access  Private/Admin
router.delete("/orders/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json({ message: "Order removed successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});



module.exports = router;