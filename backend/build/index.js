import "tslib";
import { PORT } from "./config.js";
import Express from "express";
import { SecretaryController } from "./Controllers/SecretaryController.js";
import { ProductController } from "./Controllers/ProductController.js";
import cors from "cors";
import { AppointmentsController } from "./Controllers/AppointmentsController.js";
import { SQLiteDataSource } from "./datasrc.js";
import { TodoItemController } from "./Controllers/TodoItemController.js";
const app = Express();
const router = Express.Router();
SQLiteDataSource.initialize()
    .then(() => {
    console.log("DataSource initialized.");
})
    .catch((error) => {
    console.log("error initializing DataSource:" + error);
});
app.use(Express.json());
app.use(cors());
router.get("/list_patients", SecretaryController.getPatients);
router.post("/add_patient", SecretaryController.addPatient);
router.get("/products", ProductController.getProducts);
router.get("/appointments", AppointmentsController.getAppointments);
router.get("/appointment_statuses", AppointmentsController.getAppointmentStatuses);
router.get("/test", TodoItemController.getItems);
router.get("/test2", TodoItemController.getRes);
app.use("/api", router);
app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
});
