import "tslib";
import { PORT, JWT_SECRET } from "./config.js";
import { SecretaryController } from "./Controllers/SecretaryController.js";
import { ProductController } from "./Controllers/ProductController.js";
import { AppointmentsController } from "./Controllers/AppointmentsController.js";
import { SQLiteDataSource } from "./TypeORM/datasrc.js";
import { TodoItemController } from "./Controllers/TodoItemController.js";
import {
  authRouter,
  passport,
  jwtAuth_middleware,
} from "./Controllers/auth/Auth.js";

import Session from "express-session";
import Express from "express";
import cors from "cors";
import { apiRoutes } from "./Routes/api";

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

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  Session({ secret: JWT_SECRET, resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api", authRouter);
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
