const Category = require("../models/Category");

exports.findAll = (req, res) => {
  Category.find()
    .then((categories) => res.status(200).send({ categories: categories }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  Category.findById(req.params.categoryId)
    .then((category) => {
      if (!category) {
        res.status(400).send({ message: "category not found!" });
      }
      res.status(200).send({ category: category });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  if (!req.body.name || !req.body.status) {
    res.status(400).send({
      message: "Name or Status cannot be empty!",
      name: req.body.name || null,
      status: req.body.status || null,
    });
  }

  const category = new Category({
    name: req.body.name,
    status: req.body.status,
  });

  category
    .save()
    .then((category) => res.status(201).send({ category: category }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  if (!req.body.name && !req.body.status) {
    res.status(400).send({ message: "Name or Status should be provided!" });
  }

  Category.findByIdAndUpdate(
    req.params.categoryId,
    {
      name: req.body.name,
      status: req.body.status,
    },
    { new: true, useFindAndModify: false }
  )
    .then((category) =>
      res
        .status(201)
        .send({ message: "Successfully updated", category: category })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.categoryId)
    .then((category) =>
      res.status(201).send({ message: "Successfully removed" })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};
