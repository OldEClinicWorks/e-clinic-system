import todoItemsTable from "./CreateTodoItemsTable";
import usersTable from "./CreateUsersTable";
import { createDatabase, databaseExists, tableExists } from "./database";

// Add the tables we need to migrate here:
const MIGRATION_TABLES = [usersTable, todoItemsTable];

async function db_does_not_exist() {
  const res = <any>await databaseExists();
  return res["status"] !== 1;
}

async function create_tables_if_not_exists(tables: any[]) {
  for (let index = 0; index < tables.length; index++) {
    const table = tables[index];
    if (await table_does_not_exist(table.tableName)) {
      await table.createTable();
    }
  }
}

async function table_does_not_exist(tableName) {
  return !(await tableExists(tableName));
}
export async function migrate() {
  try {
    if (await db_does_not_exist()) {
      await createDatabase();
    }
    // create_tables_if_not_exists(MIGRATION_TABLES);
  } catch (error) {
    console.log("an error has occurred while migrating:", error);
  }
}

export default { migrate };
