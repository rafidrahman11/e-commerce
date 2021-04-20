const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.findAll = (req, res) => {
  User.find()
    .then((users) => res.status(200).send({ users: users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(400).send({ message: "User not found" });
      }
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.registration = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "Email or Password cannot be empty!" });
  }

  let passwordHash = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: passwordHash,
    role: req.body.role,
  });

  user
    .save()
    .then((user) =>
      res
        .status(201)
        .send({ message: "Successfully created the user", user: user })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "Email or Password cannot be empty!" });
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (comparePassword) {
        res.status(201).send({ message: "Successfully Logged in", user: user });
      }
    } else {
      res
        .status(400)
        .send({ message: "User with this email address not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(400).send({ message: "User not found!" });
      }
      res.status(201).send({ message: "User deleted successfully!" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
