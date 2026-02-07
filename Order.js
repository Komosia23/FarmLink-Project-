const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref:"Product", required:true },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true },
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true },
  quantity: Number,
  totalPrice: Number,
  status: { type:String, enum:["pending","confirmed","delivered"], default:"pending" }
}, { timestamps:true });

module.exports = mongoose.model("Order", orderSchema);
