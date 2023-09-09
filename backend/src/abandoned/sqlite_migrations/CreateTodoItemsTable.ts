import { createTableQuery, exportTable } from "./database";

export const TABLE = "todo_items";

export async function createTodoItemTable() {
  const createTableStmt = `
    CREATE TABLE IF NOT EXISTS ${TABLE} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT
      -- Add more columns if necessary
    );
  `;

  const error = await createTableQuery(createTableStmt);

  if (error) {
    console.error("Error creating TodoItem table:", error);
    return { status: 0, error };
  } else {
    console.log(`created "${TABLE}" table in database.`);
    return { status: 1 };
  }
}

export default exportTable(TABLE, createTodoItemTable);
