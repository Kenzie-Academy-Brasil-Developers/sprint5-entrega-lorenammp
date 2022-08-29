import { Router } from "express";
import UserCreateController from "../controllers/createUser.controller";
import UserDeleteController from "../controllers/deleteUser.controller";
import UserListController from "../controllers/listUser.controller";
import ListUserByIdController from "../controllers/listUserById.controller";
import UserUpdateController from "../controllers/updateUser.controller";

const routes = Router();

routes.post("", UserCreateController);
routes.get("", UserListController);
routes.get("/:id", ListUserByIdController);
routes.patch("/:id", UserUpdateController);
routes.delete("/:id", UserDeleteController);

export default routes;
