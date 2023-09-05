import { Sequelize } from "sequelize";

// Create a new Sequelize instance with SQLite as the database dialect
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // SQLite database file name
  logging: true, // Set to true to display SQL queries in the console (for debugging)
});