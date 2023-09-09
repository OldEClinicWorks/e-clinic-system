import path from "path";
import Sqlcipher from "@journeyapps/sqlcipher";
export const PORT = 5414; // sala(r)
export const API = "api";
export const JWT_SECRET = "zxy5xz7nekg";
export const JWT_TOKEN_EXPIRE_TIME = "30d";
export const APP_MODE_DEV: number = 1;
export const APP_MODE_PROD: number = 0;
export const APP_MODE: number = APP_MODE_DEV;
export const SECRET_URL = "secret_F0IjoxNjk0MjQ23owyr34kjgk";
export const SECRET_URL_PASS = "7inys34i76rwqci34y2q3o;f";
// ATTENTION!
/**
 * SQLCIPHER_DEP_PATH, I could not find a way to dynamically change this
 * reference in the sqlcipher package
 *
 * for now, whenever moving to PROD, do the following:
 *
 * ######
 * STEP 1: make sure to change
 * the line 3: var binding_path = "app/deps/cipher.node";
 * to its apporperate value below before compiling using pkg
 *
 * this file is found in:
 *   backend/node_modules/@journeyapps/sqlcipher/lib
 *                                      /sqlite3-binding.js
 *
 * make sure to make this change, otherwise the prod won't work
 *
 * ######
 * STEP 2: make sure to copy the binary itself
 *   and rename it to cipher.node
 * FROM:
 *  backend/node_modules/@journeyapps/sqlcipher/lib/binding/.**'/*.node
 * TO:
 *  src-tauri/app/deps
 *
 * ######
 *
 * these 2 steps will assure that the backend will run
 */
// database config
export const DB_DRIVER = Sqlcipher;
export const DB_ENCRYPT_KEY = "hash19Salar1417";
export const DB_TYPE = "sqlite";

let SQLCIPHER_DEP_PATH = "";
let DB_DATABASE_DIR = "";
let DB_CHECK_ACCESS = "";

// for PROD use below:
if (APP_MODE === APP_MODE_PROD) {
  // ! manually copy the value of SQLCIPHER_DEP_PATH below to
  // !         backend
  // !         /node_modules
  // !         /@journeyapps
  // !         /sqlcipher
  // !         /lib
  // !         /sqlite3-binding.js
  // SQLCIPHER_DEP_PATH = "app/deps/cipher.node";
  DB_DATABASE_DIR = "app/data";
  DB_CHECK_ACCESS = `${DB_DATABASE_DIR}/app.data`;
}
// for DEV use below:
if (APP_MODE === APP_MODE_DEV) {
  let pkgJsonPath = "../node_modules/@journeyapps/sqlcipher/package.json";
  // ! manually copy the value of SQLCIPHER_DEP_PATH below to
  // !         backend
  // !         /node_modules
  // !         /@journeyapps
  // !         /sqlcipher
  // !         /lib
  // !         /sqlite3-binding.js
  // SQLCIPHER_DEP_PATH = binary.find(path.resolve(path.join(__dirname,'../package.json')))
  DB_DATABASE_DIR = path.join(__dirname, "app", "data");
  DB_CHECK_ACCESS = path.join(__dirname, "app", "data", "app.data");
}
export { SQLCIPHER_DEP_PATH, DB_DATABASE_DIR, DB_CHECK_ACCESS };
