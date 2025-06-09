const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products with optional filters
// @access  Public
router.get("/", async (req, res) => {
  try {
    const {
      category,
      color,
      size,
      material,
      brand,
      type,
      minPrice,
      maxPrice,
      sortBy,
      limit,
    } = req.query;

    let query = {};
    let sort = {};

    // Filters
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    if (material) {
      query.material = { $in: material.split(",") };
    }

    if (brand) {
      query.brand = { $in: brand.split(",") };
    }

    if (size) {
      query.size = { $in: size.split(",") };
    }

    if (color) {
      query.color = { $in: [color] };
    }

    // ✅ Price exact match OR range
if (req.query.price) {
  query.price = Number(req.query.price);
} else if (minPrice || maxPrice) {
  query.price = {};
  if (minPrice) query.price.$gte = Number(minPrice);
  if (maxPrice) query.price.$lte = Number(maxPrice);
}


    if (type) {
      query.type = { $in: [type] };
    }

    // Sort logic
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // Fetch products with filters
    const products = await Product.find(query).sort(sort).limit(Number(limit) || 0);
    res.json(products);
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).send("Server Error");
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
      numReviews,
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

    const product = await Product.findById(req.params.id);

    if (product) {
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
      product.isFeatured = typeof isFeatured !== "undefined" ? isFeatured : product.isFeatured;
      product.isPublished = typeof isPublished !== "undefined" ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.metaTitle = metaTitle || product.metaTitle;
      product.metaDescription = metaDescription || product.metaDescription;
      product.metaKeywords = metaKeywords || product.metaKeywords;
      product.weight = weight || product.weight;
      product.dimensions = dimensions || product.dimensions;
      product.rating = rating || product.rating;
      product.numReviews = numReviews || product.numReviews;

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

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Server error while deleting product");
  }
});

module.exports = router;
