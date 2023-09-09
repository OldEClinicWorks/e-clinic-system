"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportTable = exports.tableExists = exports.getConnection = exports.createTableQuery = exports.databaseExists = exports.createDatabase = void 0;
const tslib_1 = require("tslib");
const sqlcipher_1 = tslib_1.__importDefault(require("@journeyapps/sqlcipher"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const util_1 = require("util");
const config_1 = require("../config");
const writeFileAsync = (0, util_1.promisify)(fs_1.default.writeFile);
const mkdirAsync = (0, util_1.promisify)(fs_1.default.mkdir);
const sqlipher = sqlcipher_1.default.verbose();
function createDatabase() {
    return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const dbDirectory = config_1.DB_DATABASE_DIR;
            if (!fs_1.default.existsSync(dbDirectory)) {
                yield mkdirAsync(dbDirectory, { recursive: true });
            }
            yield writeFileAsync(config_1.DB_CHECK_ACCESS, "");
            console.log("before db");
            const db = new sqlipher.Database(config_1.DB_CHECK_ACCESS, (err) => {
                if (err)
                    console.error("error while creating database. ERROR:", err);
            });
            console.log("before exec");
            yield db.serialize(() => {
                db.run(`PRAGMA key='${config_1.DB_ENCRYPT_KEY}'`);
                db.run(`create table if not exists tempppppppp ( temp INT); `);
                db.run(`insert into tempppppppp values(1); `);
                db.run(`insert into tempppppppp values(2); `);
                db.run(`insert into tempppppppp values(3); `);
                db.run(`insert into tempppppppp values(4); `);
                console.log("after exec");
            });
            db.close();
            resolve({ status: 1 });
        }
        catch (error) {
            reject({ status: 0, error });
        }
    }));
}
exports.createDatabase = createDatabase;
function databaseExists() {
    return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            fs_1.default.access(config_1.DB_CHECK_ACCESS, fs_1.default.constants.F_OK, (err) => {
                if (err) {
                    resolve({ status: 0, error: err });
                    console.log("Check Database Exists: No");
                }
                else {
                    console.log("Check Database Exists: Yes");
                    resolve({ status: 1 });
                }
            });
        }
        catch (error) {
            console.log("Database Exists: ERROR checking");
            reject(error);
        }
    }));
}
exports.databaseExists = databaseExists;
function createTableQuery(sqlStmt) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield getConnection();
            let error = null;
            yield db.run(sqlStmt, (err) => {
                if (err) {
                    error = err;
                }
            });
        }
        catch (error) {
            return error;
        }
    });
}
exports.createTableQuery = createTableQuery;
function getConnection() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const db = new sqlipher.Database(config_1.DB_CHECK_ACCESS);
        db.serialize(() => {
            db.run(`PRAGMA key='${config_1.DB_ENCRYPT_KEY}'`);
        });
        return db;
    });
}
exports.getConnection = getConnection;
function tableExists(tableName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const db = yield getConnection();
        const findTableStmt = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
        return new Promise((resolve) => {
            db.serialize(() => {
                db.all(findTableStmt, [], (err, rows) => {
                    if (err) {
                        console.log("An error has occurred while checking for table: ", err);
                        return;
                    }
                    if (has_atleast_one_row(rows)) {
                        console.log(`Check table exists: Table "${tableName}" exists in database`);
                        resolve(true);
                    }
                    else {
                        console.log(`Check table exists: Table "${tableName}" does not exist in database`);
                        resolve(false);
                    }
                });
            });
        });
    });
}
exports.tableExists = tableExists;
function has_atleast_one_row(rows) {
    return !!rows.length;
}
function exportTable(tableName, createTable) {
    return { tableName, createTable };
}
exports.exportTable = exportTable;
