const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    tracking_id: { type: Number, required: true, index: { unique: true } },
    status: String,
    comment: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
