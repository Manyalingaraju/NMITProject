const mongoose = require("mongoose");

// Define a schema for individual checkout items
const checkoutItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false } // Prevent Mongoose from creating _id for each item
);

// Define the main checkout schema
const checkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Match this name to what you're using in the route: checkoutItems
    checkoutItems: [checkoutItemSchema],

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },

    paymentMethod: { type: String, required: true },
    totalPrice: { type: Number, required: true },

    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },

    paymentStatus: { type: String, default: "pending" },

    paymentDetails: {
      type: mongoose.Schema.Types.Mixed, // Optional: Transaction ID, etc.
    },

    isFinalized: { type: Boolean, default: false },
    finalizedAt: { type: Date },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("Checkout", checkoutSchema);
