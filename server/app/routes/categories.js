module.exports = (app) => {
  const categories = require("../controllers/categories");

  app.get("/categories", categories.findAll);

  app.get("/categories/:categoryId", categories.findOne);

  app.post("/categories", categories.create);

  app.put("/categories/:categoryId", categories.update);

  app.delete("/categories/:categoryId", categories.delete);
};
