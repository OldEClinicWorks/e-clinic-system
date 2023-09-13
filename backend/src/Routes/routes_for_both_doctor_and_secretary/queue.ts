import express from "express";
import { app_is_in_prod_mode } from "../../config";
import { AppointmentsController } from "../../Controllers/AppointmentsController";
import { ProductController } from "../../Controllers/ProductController";
import { SecretaryController } from "../../Controllers/SecretaryController";
import { jwtAuth_middleware } from "../../Controllers/auth/Auth";

export const queueRouter = express.Router();

queueRouter.get("/appointments/by_date", (req, res) => {
  return res.status(200).json({ appointments: [] });
});

queueRouter.get("/test_secure", jwtAuth_middleware, (req, res) => {
  // Only authenticated users can access this endpoint
  res.json({ message: "This is a protected resource." });
});

if (app_is_in_prod_mode()) {
} else {
}
