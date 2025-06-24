import { Router } from "express";
import {
  getAllUsers,
  userDetails,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/users.js";
import verifyToken from "./middlewares/AuthMiddleware.js";

const routes = Router();

routes.get("/users/list", getAllUsers);

routes.get("/users/details/:id", userDetails);

routes.use(verifyToken);

routes.post("/users/create", createUser);

routes.put("/users/update/:id", updateUser);

routes.delete("/users/delete/:id", deleteUser);

export { routes as default };
