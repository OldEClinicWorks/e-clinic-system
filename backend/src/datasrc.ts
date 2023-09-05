import { DataSource } from "typeorm";
import { User } from "./TypeORM/Entities/User.js";
import { TodoItem } from "./TypeORM/Entities/TodoItem.js";
import { CreateUserTable1693811920876 } from "./TypeORM/Migrations/1693811920876-CreateUserTable.js";
import { CreateTodoItemTable1693811936730 } from "./TypeORM/Migrations/1693811936730-CreateTodoItemTable.js";

export const SQLiteDataSource = new DataSource({
  type: "sqlite", // Set the database type to SQLite
  // with tauri should be: database: "../backend/Database/database.db",
  database: "./Database/database.db", // Specify the path to your SQLite database file
  entities: [User, TodoItem], // Include your entity classes (e.g., [Photo])
  migrations: [CreateUserTable1693811920876, CreateTodoItemTable1693811936730],
  synchronize: true, // Set to true to auto-create database tables (for development)
  logging: false, // Disable logging (or set to true for debugging)
});
