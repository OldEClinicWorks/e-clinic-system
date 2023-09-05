import { DataSource } from "typeorm";
import { User } from "./TypeORM/Entities/User.js";
import { TodoItem } from "./TypeORM/Entities/TodoItem.js";
import { CreateUserTable1693811920876 } from "./TypeORM/Migrations/1693811920876-CreateUserTable.js";
import { CreateTodoItemTable1693811936730 } from "./TypeORM/Migrations/1693811936730-CreateTodoItemTable.js";
export const SQLiteDataSource = new DataSource({
    type: "sqlite",
    // with tauri should be: database: "../backend/Database/database.db",
    database: "../backend/Database/database.db",
    entities: [User, TodoItem],
    migrations: [CreateUserTable1693811920876, CreateTodoItemTable1693811936730],
    synchronize: true,
    logging: false, // Disable logging (or set to true for debugging)
});
