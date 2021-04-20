const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var multer = require("multer");
const cors = require("cors");
const dbConfig = require("./config/database.config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

mongoose.Promise = global.Promise;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Successfully Connected"))
  .catch((err) => {
    console.log("DB connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/routes/users")(app);
require("./app/routes/categories")(app);
require("./app/routes/products")(app, upload);
require("./app/routes/orders")(app);

app.listen(4000, () => {
  console.log("Server listening to port: 4000");
});
