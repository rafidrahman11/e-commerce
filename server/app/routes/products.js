module.exports = (app, upload) => {
  const products = require("../controllers/products");

  app.get("/products", products.findAll);

  app.get("/products/:productId", products.findOne);

  app.get("/categories/products/:categoryId", products.findWithCategories);

  app.post("/products", products.create);

  app.put("/products/:productId", products.update);

  app.delete("/products/:productId", products.delete);
};
