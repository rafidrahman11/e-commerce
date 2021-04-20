const Order = require("../models/Order");

exports.findAll = (req, res) => {
  Order.find()
    .then((orders) => res.status(200).send({ orders: orders }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  Order.findById(req.params.orderId)
    .then((order) => {
      if (!order) {
        res.status(400).send({ message: "order not found!" });
      }
      res.status(200).send({ order: order });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  if (!req.body.products || req.body.products.length == 0) {
    res.status(400).send({ message: "No products selected" });
  }
  const order = new Order({
    tracking_id: Math.floor(100000 + Math.random() * 900000),
    status: req.body.status || "processing",
    user: req.params.userId,
    products: req.body.products,
    comment: req.body.comment || null,
  });

  order
    .save()
    .then((order) => res.status(201).send({ order: order }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  if (!req.body.status && !req.body.comment) {
    res.status(400).send({ message: "Status or Comment should be provided!" });
  }

  Order.findByIdAndUpdate(
    req.params.orderId,
    {
      status: req.body.status || "processing",
      comment: req.body.comment || null,
    },
    { new: true, useFindAndModify: false }
  )
    .then((order) =>
      res.status(201).send({ message: "Successfully updated", order: order })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  Order.findByIdAndRemove(req.params.orderId)
    .then((order) => res.status(201).send({ message: "Successfully removed" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
