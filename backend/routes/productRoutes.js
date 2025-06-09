const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @access  Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Server error while fetching products");
  }
});

// @route   GET /api/products/:id
// @desc    Get a single product by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).send("Server error");
  }
});

// @route   POST /api/products
// @desc    Create a new product
// @access  Private/Admin
router.post("/", protect, admin, async (req, res) => {
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
      rating,
      numReviews
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
      rating,
      numReviews,
      user: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send("Server error while creating product");
  }
});

// @route   PUT /api/products/:id
// @desc    Update an existing product
// @access  Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    // Log the request body for debugging
    console.log("Update request body:", req.body);

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
      rating,
      numReviews,
    } = req.body;

    // Find product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      // Update each field only if it was passed in the body
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.originalPrice = originalPrice || product.originalPrice;
      product.quantityInStock = quantityInStock || product.quantityInStock;
      product.sku = sku || product.sku;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.pages = pages || product.pages;
      product.patterns = patterns || product.patterns;
      product.material = material || product.material;
      product.images = images || product.images;
      product.isFeatured = typeof isFeatured !== 'undefined' ? isFeatured : product.isFeatured;
      product.isPublished = typeof isPublished !== 'undefined' ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.metaTitle = metaTitle || product.metaTitle;
      product.metaDescription = metaDescription || product.metaDescription;
      product.metaKeywords = metaKeywords || product.metaKeywords;
      product.weight = weight || product.weight;
      product.dimensions = dimensions || product.dimensions;
      product.rating = rating || product.rating;
      product.numReviews = numReviews || product.numReviews;

      // Save updated product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Server error while updating product");
  }
});


// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product){
        await product.deleteOne();
        res.json({message:"Product removed"})

    } else {
        res.status(404).json({message:"Product not found "})
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Server error while deleting product");
  }
});

module.exports = router;
