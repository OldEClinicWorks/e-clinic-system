"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("tslib");
const config_js_1 = require("./config.js");
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const Auth_js_1 = require("./Controllers/auth/Auth.js");
const express_1 = tslib_1.__importDefault(require("express"));
const SecretaryController_js_1 = require("./Controllers/SecretaryController.js");
const ProductController_js_1 = require("./Controllers/ProductController.js");
const cors_1 = tslib_1.__importDefault(require("cors"));
const AppointmentsController_js_1 = require("./Controllers/AppointmentsController.js");
const datasrc_js_1 = require("./TypeORM/datasrc.js");
const TodoItemController_js_1 = require("./Controllers/TodoItemController.js");
try {
    datasrc_js_1.SQLiteDataSource.initialize()
        .then(() => {
        console.log("DataSource initialized.");
        try {
        }
        catch (err) {
            console.log(err);
        }
    })
        .catch((error) => {
        console.log("error initializing DataSource:" + error);
    });
}
catch (error) {
    console.log("datasource error: ", error);
}
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({ secret: config_js_1.JWT_SECRET, resave: false, saveUninitialized: false }));
app.use(Auth_js_1.passport.initialize());
app.use(Auth_js_1.passport.session());
app.use((0, cors_1.default)());
router.get("/list_patients", SecretaryController_js_1.SecretaryController.getPatients);
router.post("/add_patient", SecretaryController_js_1.SecretaryController.addPatient);
router.get("/products", ProductController_js_1.ProductController.getProducts);
router.get("/appointments", AppointmentsController_js_1.AppointmentsController.getAppointments);
router.get("/appointment_statuses", AppointmentsController_js_1.AppointmentsController.getAppointmentStatuses);
router.get("/test_secure", Auth_js_1.jwtAuth_middleware, (req, res) => {
    res.json({ message: "This is a protected resource." });
});
router.get("/test", TodoItemController_js_1.TodoItemController.getItems);
router.get("/test_insert", TodoItemController_js_1.TodoItemController.addItem);
router.get("/test2", TodoItemController_js_1.TodoItemController.getRes);
app.use("/api", Auth_js_1.authRouter);
app.use("/api", router);
app.listen(config_js_1.PORT, () => {
    console.log(`now listening on port ${config_js_1.PORT}`);
});
