const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/user");
const Cart = require("./models/Cart");
const product = require("./data/products");

dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// function to seed data 
const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create a default admin user 
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456", // You may want to hash this in real usage
      isAdmin: true,
    });

    const userID = createdUser._id;

    // Assign the default user ID and clean ₹ from price strings
    const sampleProducts = product.map((p) => {
      const cleanPrice = typeof p.price === "string" ? parseFloat(p.price.replace("₹", "")) : p.price;
      const cleanOriginalPrice = typeof p.originalPrice === "string" ? parseFloat(p.originalPrice.replace("₹", "")) : p.originalPrice;

      return {
        ...p,
        price: cleanPrice,
        originalPrice: cleanOriginalPrice,
        user: userID,
      };
    });

    // Insert the products into the database 
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully");
    process.exit();

  } catch (error) {
    console.error("Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
