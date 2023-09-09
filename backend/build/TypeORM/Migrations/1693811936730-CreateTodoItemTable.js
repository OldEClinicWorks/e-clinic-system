"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoItemTable1693811936730 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateTodoItemTable1693811936730 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
                ],
            }));
            yield queryRunner.addColumn("todo_item", new typeorm_1.TableColumn({
                name: "owner_id",
                type: "integer",
            }));
            yield queryRunner.createForeignKey("todo_item", new typeorm_1.TableForeignKey({
                columnNames: ["owner_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE",
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = yield queryRunner.getTable("todo_item");
            const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.includes("owner_id"));
            if (foreignKey) {
                yield queryRunner.dropForeignKey("todo_item", foreignKey);
            }
            yield queryRunner.dropTable("todo_item");
        });
    }
}
exports.CreateTodoItemTable1693811936730 = CreateTodoItemTable1693811936730;
