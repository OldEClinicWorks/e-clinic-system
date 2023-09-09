import Sqlcipher from "@journeyapps/sqlcipher";
import fs from "fs";
import { promisify } from "util";
import { DB_DATABASE_DIR, DB_CHECK_ACCESS, DB_ENCRYPT_KEY } from "../../config";

/**
 * PLEASE READ CAREFULLY
 *
 * FIRSTLY:
 *  BEFORE USING, ALWAYS CHECK: config.ts for SQLCIPHER .node path configuration
 *
 * BELOW STEPS NO LONGER NEEDED
//  * SECONDLY: 
//  *  in order for "better-sqlite3" to be compiled correctly,
//  * we need to compile the whole package using "node-gyp" module.
//  *
//  * this module (node-gyp) has many requirements and it is best
//  * to check the official documentations for it: https://github.com/nodejs/node-gyp
//  *
//  *
//  * HOW TO COMPILE SUCCESSFULLY?
//  *
//  * You have written some js code that uses this getConnection() method.
//  * now how to compile this?
//  *
//  * STEP 1: create a new node js project (npm init -y)
//  * STEP 2: install node-gyp globally if you haven't already
//  * STEP 3: npm install better-sqlite3
//  *        OR npm i @journeyapps/sqlcipher
//  * STEP 4: cd node_modules/better-sqlite3/
//  * STEP 5: node-gyp rebuild
//  * STEP 6: now you got a new folder inside called "build"
//  * STEP 7: navigate to "build/release/"
//  * STEP 8: copy all the contents from build/release/
//  * STEP 9: navigate to your node js project (secretary-app)/backend/node_modules
//  * STEP 10: remove "better-sqlite3" from your node_modules
//  * STEP 11: remove "better-sqlite3" from your package.json
//  * STEP 12: create a new "better-sqlite3" folder inside your node_modules
//  * STEP 13: paste all the contents from "build/release" into your new "better-sqlite3" folder
//  * STEP 14: you are now ready to build the project
 */

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);
const sqlipher = Sqlcipher.verbose();

export function createDatabase() {
  return new Promise(async (resolve, reject) => {
    try {
      const dbDirectory = DB_DATABASE_DIR;

      // Create the directory if it doesn't exist
      if (!fs.existsSync(dbDirectory)) {
        await mkdirAsync(dbDirectory, { recursive: true });
      }

      await writeFileAsync(DB_CHECK_ACCESS, "");
      console.log("before db");
      const db = new sqlipher.Database(DB_CHECK_ACCESS, (err) => {
        if (err) console.error("error while creating database. ERROR:", err);
      });

      // 4 hours on this funcking shyt
      // at the end, the solution was: you have to at least
      // create 1 table using the DB_ENCRYPT_KEY
      // otherwise you will get corrupted DB!!!!!!
      // FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUK!
      console.log("before exec");
      await db.serialize(() => {
        db.run(`PRAGMA key='${DB_ENCRYPT_KEY}'`);
        db.run(`create table if not exists tempppppppp ( temp INT); `);
        db.run(`insert into tempppppppp values(1); `);
        db.run(`insert into tempppppppp values(2); `);
        db.run(`insert into tempppppppp values(3); `);
        db.run(`insert into tempppppppp values(4); `);
        console.log("after exec");
      });
      db.close();
      resolve({ status: 1 });
    } catch (error) {
      reject({ status: 0, error });
    }
  });
}
export function databaseExists() {
  return new Promise(async (resolve, reject) => {
    try {
      fs.access(DB_CHECK_ACCESS, fs.constants.F_OK, (err) => {
        if (err) {
          resolve({ status: 0, error: err });
          console.log("Check Database Exists: No");
        } else {
          console.log("Check Database Exists: Yes");
          resolve({ status: 1 });
        }
      });
    } catch (error) {
      console.log("Database Exists: ERROR checking");
      reject(error);
    }
  });
}
export async function createTableQuery(sqlStmt) {
  try {
    const db = await getConnection();
    let error: Error | null = null;
    await db.run(sqlStmt, (err) => {
      if (err) {
        error = err;
      }
    });
  } catch (error) {
    return error;
  }
}

export async function getConnection() {
  const db = new sqlipher.Database(DB_CHECK_ACCESS);
  db.serialize(() => {
    db.run(`PRAGMA key='${DB_ENCRYPT_KEY}'`);
  });
  return db;
}

export async function tableExists(tableName) {
  const db = await getConnection();
  const findTableStmt = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
  return new Promise((resolve) => {
    db.serialize(() => {
      db.all(findTableStmt, [], (err, rows) => {
        if (err) {
          console.log("An error has occurred while checking for table: ", err);
          return;
        }
        if (has_atleast_one_row(rows)) {
          console.log(
            `Check table exists: Table "${tableName}" exists in database`
          );
          resolve(true);
        } else {
          console.log(
            `Check table exists: Table "${tableName}" does not exist in database`
          );
          resolve(false);
        }
      });
    });
  });
}

function has_atleast_one_row(rows: any[]) {
  return !!rows.length;
}

export function exportTable(tableName, createTable) {
  return { tableName, createTable };
}

/** CHAT GPT instructions for compiling
 * If you've compiled better-sqlite3 and want to use it in another Node.js project without installing it as a dependency, you can achieve this by manually copying the compiled better-sqlite3 binary and its required files from your compiled project to the new project. Here's how you can do it:

From the Compiled Project (Source Project):

    Locate the compiled better-sqlite3 binary files. After compiling, they should be in a directory like build/Release within the better-sqlite3 module directory.

    Copy the entire better-sqlite3 module directory to a location accessible by your new project. For example, you could create a folder named compiled-modules in the root directory of your source project and copy the better-sqlite3 module directory there.

In Your New Project:

    In your new project directory, create a directory named node_modules if it doesn't already exist.

    Inside the node_modules directory, create a symbolic link (symlink) to the better-sqlite3 module directory you copied from the source project. You can use the ln command on macOS/Linux or mklink on Windows to create symlinks.

    On macOS/Linux:

    bash

ln -s /path/to/compiled-modules/better-sqlite3 /path/to/new-project/node_modules/better-sqlite3

On Windows (run as administrator in Command Prompt):

bash

mklink /D C:\path\to\new-project\node_modules\better-sqlite3 C:\path\to\compiled-modules\better-sqlite3

Replace /path/to/compiled-modules and /path/to/new-project with the actual paths to your compiled better-sqlite3 module directory and your new project directory.

Now, in your new project, you can require better-sqlite3 just like you normally would:

javascript

    const Database = require('better-sqlite3');
    const db = new Database('my-database.db');

By creating a symlink to the compiled better-sqlite3 module, you're effectively making it available to your new project without the need to install it as a dependency via npm. This approach is particularly useful when you want to reuse compiled modules across multiple projects.
 */
