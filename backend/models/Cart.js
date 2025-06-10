const mongoose = require("mongoose");
const products = require("../data/products");

const cartItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: String,
  image: String, // fixed typo: "Image" -> "image"
  price: Number, // fixed: should be a Number, not String
  category: String,
  material: String,
  quantity: {
    type: Number,
    default: 1,
  },
}, { _id: false });

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  guestId: {
    type: String,
  },
  items: [cartItemSchema], // fixed: changed from "products"
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
