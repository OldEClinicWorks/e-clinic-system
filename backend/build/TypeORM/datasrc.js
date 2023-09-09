"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_js_1 = require("./Entities/User.js");
const TodoItem_js_1 = require("./Entities/TodoItem.js");
const JwtToken_js_1 = require("./Entities/JwtToken.js");
const config_js_1 = require("../config.js");
const connOptions = {
    driver: config_js_1.DB_DRIVER,
    key: config_js_1.DB_ENCRYPT_KEY,
    type: config_js_1.DB_TYPE,
    database: config_js_1.DB_CHECK_ACCESS,
    entities: [User_js_1.User, TodoItem_js_1.TodoItem, JwtToken_js_1.JwtToken],
    synchronize: true,
    logging: false,
    enableWAL: true,
};
exports.SQLiteDataSource = new typeorm_1.DataSource(connOptions);
function test() {
    try {
        exports.SQLiteDataSource.initialize()
            .then(() => {
            console.log("DataSource initialized.");
        })
            .catch((error) => {
            console.log("error initializing DataSource:" + error);
        });
    }
    catch (error) {
        console.log("datasource error: ", error);
    }
}
