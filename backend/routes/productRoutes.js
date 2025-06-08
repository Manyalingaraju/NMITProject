const express = require("express");
const Product = require("../models/Product");
const { protect,admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/products
// @desc    Create a new Product
// @access  Private/Admin
router.post("/", protect, admin,async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      originalPrice,
      quantityInStock,
      sku,
      category,
      brand,
      pages,
      patterns,
      material,
      images,
      isFeatured,
      isPublished,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      weight,
      dimensions,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      originalPrice,
      quantityInStock,
      sku,
      category,
      brand,
      pages,
      patterns,
      material,
      images,
      isFeatured,
      isPublished,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      weight,
      dimensions,
      user:req.user._id,//reference to the admin user who created it 
    });

    const createdProduct=await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error( error);
    res.status(500).send("Server error while creating product" );
  }
});

// @route   GET /api/products
// @desc    Get all products
// @access  Public
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (error) {
//     console.error("Fetch Products Error:", error);
//     res.status(500).json({ message: "Server error while fetching products" });
//   }
// });

// // @route   GET /api/products/:id
// // @desc    Get a single product by ID
// // @access  Public
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product)
//       return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     console.error("Get Product Error:", error);
//     res.status(500).json({ message: "Server error while getting product" });
//   }
// });

// // @route   PUT /api/products/:id
// // @desc    Update a product
// // @access  Private
// router.put("/:id", protect, async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     if (!updated)
//       return res.status(404).json({ message: "Product not found" });

//     res.json(updated);
//   } catch (error) {
//     console.error("Update Product Error:", error);
//     res.status(500).json({ message: "Server error while updating product" });
//   }
// });

// // @route   DELETE /api/products/:id
// // @desc    Delete a product
// // @access  Private
// router.delete("/:id", protect, async (req, res) => {
//   try {
//     const deleted = await Product.findByIdAndDelete(req.params.id);
//     if (!deleted)
//       return res.status(404).json({ message: "Product not found" });

//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Delete Product Error:", error);
//     res.status(500).json({ message: "Server error while deleting product" });
//   }
// });

module.exports = router;
