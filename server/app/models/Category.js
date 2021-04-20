const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: String,
    status: Boolean,
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
