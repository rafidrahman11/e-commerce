const Product = require("../models/Product");
const Category = require("../models/Category");

exports.findAll = (req, res) => {
  Product.find()
    .then((products) => res.status(200).send({ products: products }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        res.status(400).send({ message: "product not found!" });
      }
      res.status(200).send({ product: product });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findWithCategories = (req, res) => {
  Category.find({ _id: req.params.categoryId })
    .populate("products")
    .then((category) =>
      res.status(200).send({ products: category[0].products })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.price ||
    !req.body.status
  ) {
    res.status(400).send({ message: "Name or Status cannot be empty!" });
  }

  // upload(req, res, function (err) {
  //   if (err instanceof multer.MulterError) {
  //     return res.status(500).json(err);
  //   } else if (err) {
  //     return res.status(500).json(err);
  //   }
  //   return res.status(200).send(req.file);
  // });

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount || null,
    rating: req.body.rating || null,
    status: req.body.status,
    category: req.body.categoryId,
  });

  product
    .save()
    .then((product) => {
      return Category.findOneAndUpdate(
        { _id: req.body.categoryId },
        { $push: { products: product._id } },
        { new: true }
      );
    })
    .then((data) => res.status(200).send({ products: data }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  if (
    !req.body.name &&
    !req.body.description &&
    !req.body.price &&
    !req.body.status
  ) {
    res.status(400).send({ message: "Content should be provided!" });
  }

  Product.findByIdAndUpdate(
    req.params.productId,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount || null,
      rating: req.body.rating || null,
      status: req.body.status,
    },
    { new: true, useFindAndModify: false }
  )
    .then((product) =>
      res
        .status(201)
        .send({ message: "Successfully updated", product: product })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((product) =>
      res.status(201).send({ message: "Successfully removed" })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};
