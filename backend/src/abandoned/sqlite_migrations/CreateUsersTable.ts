import { createTableQuery, exportTable, getConnection } from "./database";

export const TABLE = "users";
export async function createUserTable() {
  const stmt = `
  CREATE TABLE IF NOT EXISTS ${TABLE} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    -- Add more columns if necessary
  );
`;
  const error = await createTableQuery(stmt);
  if (error) {
    console.error("Error creating TodoItem table:", error);
    return { status: 0, error };
  } else {
    console.log(`created "${TABLE}" table in database.`);
    return { status: 1 };
  }
}

export default exportTable(TABLE, createUserTable);
