const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const { storage } = require('../utils/CloudinaryConfig');

const upload = multer({ storage });

// POST /products (with image)
router.post('/', upload.single('product_image'), async (req, res) => {
  try {
    const newProduct = new Product({
      product_name: req.body.product_name,
      product_rating: req.body.product_rating,
      product_image: req.file?.path, // Cloudinary image URL
      product_description: req.body.product_description,
      product_stock: req.body.product_stock
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /products
router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
