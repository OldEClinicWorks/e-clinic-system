import { DataSource } from "typeorm";
import { User } from "./Entities/User.js";
import { TodoItem } from "./Entities/TodoItem.js";
import { JwtToken } from "./Entities/JwtToken.js";

import { CreateUserTable1693811920876 } from "./Migrations/1693811920876-CreateUserTable.js";
import { CreateTodoItemTable1693811936730 } from "./Migrations/1693811936730-CreateTodoItemTable.js";
import {
  DB_CHECK_ACCESS,
  DB_DRIVER,
  DB_ENCRYPT_KEY,
  DB_TYPE,
} from "../config.js";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions.js";

// BEFORE USING, ALWAYS CHECK: config.ts for SQLCIPHER .node path configuration

const connOptions: SqliteConnectionOptions = {
  driver: DB_DRIVER,
  key: DB_ENCRYPT_KEY,
  type: DB_TYPE, // Set the database type to SQLite
  database: DB_CHECK_ACCESS, // Specify the path to your SQLite database file
  entities: [User, TodoItem, JwtToken], // Include your entity classes (e.g., [Photo])
  // migrations: [CreateUserTable1693811920876, CreateTodoItemTable1693811936730],
  synchronize: true, // Set to true to auto-create database tables (for development)
  logging: false, // Disable logging (or set to true for debugging)
  enableWAL: true,
};
export const SQLiteDataSource = new DataSource(connOptions);

function test() {
  try {
    SQLiteDataSource.initialize()
      .then(() => {
        console.log("DataSource initialized.");
      })
      .catch((error) => {
        console.log("error initializing DataSource:" + error);
      });
  } catch (error) {
    console.log("datasource error: ", error);
  }
}
