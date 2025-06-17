// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv=require("dotenv");

// Import route files
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoutes=require("./routes/subscribeRoute");
const adminRoutes=require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
const path = require("path");
app.use('/assets', express.static(path.join(__dirname, 'assetsBackend')));




// Base route
app.get("/", (req, res) => res.send("WELCOME TO NMIT API!"));

// API routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes); 
app.use("/api", subscribeRoutes); 
app.use("/api", adminRoutes); // ✅ Mounts routes like /api/admin/users
app.use("/api", productAdminRoutes);
app.use("/api/admin", adminOrderRoutes);


// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
