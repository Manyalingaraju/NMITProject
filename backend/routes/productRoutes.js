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
      price,
      minPrice,
      maxPrice,
      sortBy,
      limit,
    } = req.query;

    let query = {};
    let sort = {};

    // Helper to handle comma-separated filters
    const addFilter = (field, value) => {
      if (!value) return;
      const items = value.split(",").map(v => v.trim()).filter(Boolean);
      query[field] = items.length > 1 ? { $in: items } : items[0];
    };

    addFilter("category", category && category.toLowerCase() !== "all" ? category : null);
    addFilter("material", material);
    addFilter("brand", brand);
    addFilter("size", size);
    addFilter("color", color);
    addFilter("type", type);

    // Price filter
   // ───────────── Price filter ─────────────
const buildPriceQuery = (exact, min, max) => {
  // use .trim() to catch accidental spaces
  const toNum = v => v !== undefined && v !== null && v.toString().trim() !== ""
    ? Number(v)
    : undefined;

  const pExact = toNum(exact);
  const pMin   = toNum(min);
  const pMax   = toNum(max);

  if (pExact !== undefined) return pExact;

  const pQry = {};
  if (pMin !== undefined) pQry.$gte = pMin;
  if (pMax !== undefined) pQry.$lte = pMax;

  return Object.keys(pQry).length ? pQry : undefined;
};

const priceFilter = buildPriceQuery(price, minPrice, maxPrice);
if (priceFilter !== undefined) query.price = priceFilter;


    // Sort options
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
          sort = {};
      }
    }

    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.json(products);
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).send("Server Error");
  }
});
//@route GET/api/products/best-seller
//@desc retrive the product with highest rating
//@access public

router.get("/best-seller", async (req, res) => {
  try { 
    const highestRated = await Product.findOne().sort({ rating: -1 }).limit(1);
    if (!highestRated) {
      return res.status(404).json({ message: "No products found" });
    }

    const bestSellers = await Product.find({ rating: highestRated.rating });

    res.json(bestSellers);
  } catch (error) {
    console.error("Error fetching best-seller product(s):", error);
    res.status(500).send("Server error");
  }
});
//@route GET/api/products/new-arrivls
//@desc Retrive latest 4 products -creation date
//@access public
// @route   GET /api/products/new-arrivals
// @desc    Retrieve the latest 4 products by creation date
// @access  Public

router.get("/new-arrivals", async (req, res) => {
  try {
    const newArrivals = await Product.find()
      .sort({ createdAt: -1 }) // Sort by most recent first
      .limit(4);               // Limit to 4 products

    res.json(newArrivals);
  } catch (error) {
    console.error("Error fetching new arrivals:", error.message);
    res.status(500).send("Server error");
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
// @route   GET /api/products/similar/:id
// @desc    Retrieve similar products based on category OR material
// @access  Public

router.get("/similar/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find products with either the same category or same material (excluding the current product)
    const similarProducts = await Product.find({
      _id: { $ne: product._id },
      $or: [
        { category: product.category },
        { material: product.material }
      ]
    });

    res.json(similarProducts);
  } catch (error) {
    console.error("Error fetching similar products:", error);
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
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;

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
