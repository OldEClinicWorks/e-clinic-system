"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1693811920876 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateUserTable1693811920876 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("user");
        });
    }
}
exports.CreateUserTable1693811920876 = CreateUserTable1693811920876;
