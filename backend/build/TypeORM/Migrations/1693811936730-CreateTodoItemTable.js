import { __awaiter } from "tslib";
import { Table, TableColumn, TableForeignKey, } from "typeorm";
export class CreateTodoItemTable1693811936730 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new Table({
                name: "todo_item",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    // Add more columns if necessary
                ],
            }));
            // Add a foreign key constraint to link the owner_id to the User table
            yield queryRunner.addColumn("todo_item", new TableColumn({
                name: "owner_id",
                type: "integer",
            }));
            yield queryRunner.createForeignKey("todo_item", new TableForeignKey({
                columnNames: ["owner_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE", // Specify the desired behavior on deletion
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // Drop the foreign key constraint first
            const table = yield queryRunner.getTable("todo_item");
            const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.includes("owner_id"));
            if (foreignKey) {
                yield queryRunner.dropForeignKey("todo_item", foreignKey);
            }
            // Drop the TodoItem table
            yield queryRunner.dropTable("todo_item");
        });
    }
}
