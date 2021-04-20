module.exports = (app) => {
  const orders = require("../controllers/orders");

  app.get("/orders", orders.findAll);

  app.get("/orders/:orderId", orders.findOne);

  app.post("/orders/:userId", orders.create);

  app.put("/orders/:orderId", orders.update);

  app.delete("/orders/:orderId", orders.delete);
};
