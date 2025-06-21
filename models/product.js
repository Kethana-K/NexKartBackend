const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: String,
  product_rating: Number,
  product_image: String,
  product_description: String,
  product_stock: Number,
   product_image: String
});

module.exports = mongoose.model('Product', ProductSchema)