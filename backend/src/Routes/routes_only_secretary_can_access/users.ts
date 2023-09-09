import express from 'express';
import { app_is_in_prod_mode } from '../../config';
import { AppointmentsController } from '../../Controllers/AppointmentsController';
import { ProductController } from '../../Controllers/ProductController';
import { SecretaryController } from '../../Controllers/SecretaryController';
import { jwtAuth_middleware } from '../../Controllers/auth/Auth';

export const usersRouter = express.Router();

usersRouter.get("/list_patients", SecretaryController.getPatients);
usersRouter.post("/add_patient", SecretaryController.addPatient);
usersRouter.get("/products", ProductController.getProducts);
usersRouter.get("/appointments", AppointmentsController.getAppointments);
usersRouter.get(
  "/appointment_statuses",
  AppointmentsController.getAppointmentStatuses
);

usersRouter.get("/test_secure", jwtAuth_middleware, (req, res) => {
    // Only authenticated users can access this endpoint
    res.json({ message: "This is a protected resource." });
  });

if(app_is_in_prod_mode()){
    
}else{

}

function onlySecretaryRoleCanAccess_middleware(){
    // needed? dunno 
}