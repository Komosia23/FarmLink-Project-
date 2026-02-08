const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true },
  name: { type: String, required:true },
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  location: String,
  images: [String]
}, { timestamps:true });

module.exports = mongoose.model("Product", productSchema);
