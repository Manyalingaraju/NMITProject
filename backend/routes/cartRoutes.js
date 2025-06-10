const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Helper function to get a cart by user ID or guest ID
const getCart = async (userId, guestId) => {
  const filter = userId ? { userId } : { guestId };
  return await Cart.findOne(filter);
};

// @route POST /api/cart
// @desc Add a product to the cart for a guest or logged-in user
// @access Public
router.post("/", async (req, res) => {
  const { productId, quantity = 1, category, material, guestId, userId } = req.body;

  try {
    const product = await Product.findById(req.body.productId);
    console.log("Product ID received:", req.body.productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await getCart(userId, guestId);

    if (cart) {
      const productIndex = cart.items.findIndex(
        (p) =>
          p.productID.toString() === productId &&
          p.category === category &&
          p.material === material
      );

      if (productIndex > -1) {
        cart.items[productIndex].quantity += quantity;
      } else {
        cart.items.push({
          productID: product._id,
          name: product.name,
          image: product.images[0]?.url || "",
          price: product.price,
          category,
          material,
          quantity,
        });
      }

      // Recalculate total price
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);

    } else {
      // Create a new cart if one doesn't exist
      const newCart = await Cart.create({
        userId: userId || undefined,
        guestId: guestId || `guest_${new Date().getTime()}`,
        items: [
          {
            productID: product._id,
            name: product.name,
            image: product.images[0]?.url || "",
            price: product.price,
            category,
            material,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });

      return res.status(201).json(newCart);
    }

  } catch (error) {
    console.error("Error in /api/cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.put("/", async (req, res) => {
  const { productId, quantity, category, material, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.items.findIndex(
      (item) =>
        item.productID.toString() === productId &&
        item.category.toLowerCase() === category.toLowerCase() &&
        item.material.toLowerCase() === material.toLowerCase()
    );

    if (productIndex > -1) {
      if (quantity > 0) {
        cart.items[productIndex].quantity = quantity;
      } else {
        cart.items.splice(productIndex, 1);
      }

      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error in PUT /api/cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

//@route Delete /api/cart
//@desc Remove product from the cart 
//access public 
// @route   DELETE /api/cart
// @desc    Remove a product from the cart
// @access  Public

router.delete("/", async (req, res) => {
  const { productId, category, material, guestId, userId } = req.body;

  try {
    const cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.items.findIndex(
      (item) =>
        item.productID.toString() === productId &&
        item.category?.toLowerCase() === category?.toLowerCase() &&
        item.material?.toLowerCase() === material?.toLowerCase()
    );

    if (productIndex > -1) {
      cart.items.splice(productIndex, 1);

      // Recalculate total price
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json({ message: "Item removed", cart });
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error in DELETE /api/cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});
// @route   GET /api/cart
// @desc    Get logged-in user's or guest user's cart
// @access  Public

router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json({ cart });
  } catch (error) {
    console.error("Error in GET /api/cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
