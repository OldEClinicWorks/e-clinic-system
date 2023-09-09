"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTable = exports.TABLE = void 0;
const tslib_1 = require("tslib");
const database_1 = require("./database");
exports.TABLE = "users";
function createUserTable() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const stmt = `
  CREATE TABLE IF NOT EXISTS ${exports.TABLE} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    -- Add more columns if necessary
  );
`;
        const error = yield (0, database_1.createTableQuery)(stmt);
        if (error) {
            console.error("Error creating TodoItem table:", error);
            return { status: 0, error };
        }
        else {
            console.log(`created "${exports.TABLE}" table in database.`);
            return { status: 1 };
        }
    });
}
exports.createUserTable = createUserTable;
exports.default = (0, database_1.exportTable)(exports.TABLE, createUserTable);
