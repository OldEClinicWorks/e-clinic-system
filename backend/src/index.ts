import "tslib";
import { PORT, JWT_SECRET } from "./config.js";
import Session from "express-session";
import { authRouter, passport, jwtAuth_middleware } from "./Controllers/auth/Auth.js";
import Express from "express";
import { SecretaryController } from "./Controllers/SecretaryController.js";
import { ProductController } from "./Controllers/ProductController.js";
import cors from "cors";
import { AppointmentsController } from "./Controllers/AppointmentsController.js";
import { SQLiteDataSource } from "./TypeORM/datasrc.js";
import { User } from "./TypeORM/Entities/User.js";
import { TodoItemController } from "./Controllers/TodoItemController.js";

// import app_migrations from "./abandoned/sqlite_migrations/migration.js";

// app_migrations.migrate().then(() => {
try {
  SQLiteDataSource.initialize()
    .then(() => {
      console.log("DataSource initialized.");
      try {
        // User.insert({
        //   name: "salar",
        //   username: "salar",
        //   password: "123",
        // });
      } catch (err) {
        console.log(err);
      }
    })
    .catch((error) => {
      console.log("error initializing DataSource:" + error);
    });
} catch (error) {
  console.log("datasource error: ", error);
}
// });

const app = Express();
const router = Express.Router();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  Session({ secret: JWT_SECRET, resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

router.get("/list_patients", SecretaryController.getPatients);
router.post("/add_patient", SecretaryController.addPatient);

router.get("/products", ProductController.getProducts);
router.get("/appointments", AppointmentsController.getAppointments);
router.get(
  "/appointment_statuses",
  AppointmentsController.getAppointmentStatuses
);

router.get("/test_secure", jwtAuth_middleware, (req, res) => {
  // Only authenticated users can access this endpoint
  res.json({ message: "This is a protected resource." });
});

router.get("/test", TodoItemController.getItems);
router.get("/test_insert", TodoItemController.addItem);
router.get("/test2", TodoItemController.getRes);

app.use("/api", authRouter);
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
