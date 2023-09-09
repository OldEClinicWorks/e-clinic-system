"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const tslib_1 = require("tslib");
const CreateTodoItemsTable_1 = tslib_1.__importDefault(require("./CreateTodoItemsTable"));
const CreateUsersTable_1 = tslib_1.__importDefault(require("./CreateUsersTable"));
const database_1 = require("./database");
const MIGRATION_TABLES = [CreateUsersTable_1.default, CreateTodoItemsTable_1.default];
function db_does_not_exist() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield (0, database_1.databaseExists)();
        return res["status"] !== 1;
    });
}
function create_tables_if_not_exists(tables) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < tables.length; index++) {
            const table = tables[index];
            if (yield table_does_not_exist(table.tableName)) {
                yield table.createTable();
            }
        }
    });
}
function table_does_not_exist(tableName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return !(yield (0, database_1.tableExists)(tableName));
    });
}
function migrate() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (yield db_does_not_exist()) {
                yield (0, database_1.createDatabase)();
            }
        }
        catch (error) {
            console.log("an error has occurred while migrating:", error);
        }
    });
}
exports.migrate = migrate;
exports.default = { migrate };
