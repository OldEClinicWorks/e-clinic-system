"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("tslib");
const config_js_1 = require("./config.js");
const datasrc_js_1 = require("./TypeORM/datasrc.js");
const Auth_js_1 = require("./Controllers/auth/Auth.js");
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const api_1 = require("./Routes/api");
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
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({ secret: config_js_1.JWT_SECRET, resave: false, saveUninitialized: false }));
app.use(Auth_js_1.passport.initialize());
app.use(Auth_js_1.passport.session());
app.use((0, cors_1.default)());
app.use("/api", Auth_js_1.authRouter);
app.use("/api", api_1.apiRoutes);
app.listen(config_js_1.PORT, () => {
    console.log(`now listening on port ${config_js_1.PORT}`);
});
