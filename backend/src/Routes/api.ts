import express from "express";
import { jwtAuth_middleware } from "../Controllers/auth/Auth";
import { TodoItemController } from "../Controllers/TodoItemController";
import { app_is_in_prod_mode } from "../config";
import { usersRouter } from "./routes_only_secretary_can_access/users";

export const apiRoutes = express.Router();

if (app_is_in_prod_mode()) {
  apiRoutes.use(jwtAuth_middleware);
} else {  
  apiRoutes.get("/test", TodoItemController.getItems);
  apiRoutes.get("/test_insert", TodoItemController.addItem);
  apiRoutes.get("/test2", TodoItemController.getRes);
}

apiRoutes.use("/users", usersRouter);
