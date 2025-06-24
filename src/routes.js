const { Router } = require("express");
const {
  getAllUsers,
  userDetails,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/users");
const verifyToken = require("./middlewares/AuthMiddleware");

const routes = Router();

routes.get("/users", getAllUsers);

routes.get("/users/:id", userDetails);

routes.use(verifyToken);

routes.post("/users/create", createUser);

routes.put("/users/:id", updateUser);

routes.delete("/users/:id", deleteUser);

module.exports = routes;
