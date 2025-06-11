const mongoose = require("mongoose");

// Subdocument schema for individual order items
const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category:String,
    material:String,
    quantity: {
      type: Number,
      required: true,
      default: 1,
    }
  },
  { _id: false } // Optional: disables individual _id for each item
);

// Main order schema
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [orderItemSchema],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
   totalPrice: { type: Number, required: true },
   
       isPaid: { type: Boolean, default: false },
       paidAt: { type: Date },
   
       paymentStatus: { type: String, default: "pending" },
    //    paymentDetails: {
    //      type: mongoose.Schema.Types.Mixed, // e.g., transaction ID, gateway response
    //    },
   
       isDeliverd: { type: Boolean, default: false },
       deliverdAt: { type: Date },
       status:{
        type:String,
        enum:["Processing","shipped","Delivered","Cancelled"],
        default:"Processing",
       },
     },
     { timestamps: true }
   );

module.exports = mongoose.model("Order", orderSchema);
