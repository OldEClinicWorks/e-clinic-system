"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CHECK_ACCESS = exports.DB_DATABASE_DIR = exports.SQLCIPHER_DEP_PATH = exports.app_is_in_dev_mode = exports.app_is_in_prod_mode = exports.DB_TYPE = exports.DB_ENCRYPT_KEY = exports.DB_DRIVER = exports.SSL_KEY = exports.SSL_CERT = exports.SECRET_URL_PASS = exports.SECRET_URL = exports.APP_MODE = exports.APP_MODE_PROD = exports.APP_MODE_DEV = exports.JWT_TOKEN_EXPIRE_TIME = exports.JWT_SECRET = exports.API = exports.PORT = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const sqlcipher_1 = tslib_1.__importDefault(require("@journeyapps/sqlcipher"));
exports.PORT = 5414;
exports.API = "api";
exports.JWT_SECRET = "zxy5xz7nekg";
exports.JWT_TOKEN_EXPIRE_TIME = "30d";
exports.APP_MODE_DEV = 1;
exports.APP_MODE_PROD = 0;
exports.APP_MODE = exports.APP_MODE_DEV;
exports.SECRET_URL = "secret_F0IjoxNjk0MjQ23owyr34kjgk";
exports.SECRET_URL_PASS = "7inys34i76rwqci34y2q3o;f";
exports.SSL_CERT = "";
exports.SSL_KEY = "";
exports.DB_DRIVER = sqlcipher_1.default;
exports.DB_ENCRYPT_KEY = "hash19Salar1417";
exports.DB_TYPE = "sqlite";
let SQLCIPHER_DEP_PATH = "";
exports.SQLCIPHER_DEP_PATH = SQLCIPHER_DEP_PATH;
let DB_DATABASE_DIR = "";
exports.DB_DATABASE_DIR = DB_DATABASE_DIR;
let DB_CHECK_ACCESS = "";
exports.DB_CHECK_ACCESS = DB_CHECK_ACCESS;
if (exports.APP_MODE === exports.APP_MODE_PROD) {
    exports.DB_DATABASE_DIR = DB_DATABASE_DIR = "app/data";
    exports.DB_CHECK_ACCESS = DB_CHECK_ACCESS = `${DB_DATABASE_DIR}/app.data`;
}
if (exports.APP_MODE === exports.APP_MODE_DEV) {
    let pkgJsonPath = "../node_modules/@journeyapps/sqlcipher/package.json";
    exports.DB_DATABASE_DIR = DB_DATABASE_DIR = path_1.default.join(__dirname, "app", "data");
    exports.DB_CHECK_ACCESS = DB_CHECK_ACCESS = path_1.default.join(__dirname, "app", "data", "app.data");
}
function app_is_in_prod_mode() {
    return exports.APP_MODE === exports.APP_MODE_PROD;
}
exports.app_is_in_prod_mode = app_is_in_prod_mode;
function app_is_in_dev_mode() {
    return exports.APP_MODE === exports.APP_MODE_DEV;
}
exports.app_is_in_dev_mode = app_is_in_dev_mode;
