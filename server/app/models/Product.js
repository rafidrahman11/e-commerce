const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    discount: Number,
    rating: Number,
    status: Boolean,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
