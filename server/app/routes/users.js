module.exports = (app) => {
  const users = require("../controllers/users");

  app.get("/users", users.findAll);

  app.get("/users/:userId", users.findOne);

  app.post("/users", users.registration);

  app.post("/login", users.login);

  app.delete("/users/:userId", users.delete);
};
