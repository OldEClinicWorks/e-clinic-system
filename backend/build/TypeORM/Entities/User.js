"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.PASSWORD_COL = exports.USERNAME_COL = exports.NAME_COL = exports.TABLE_NAME = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
exports.TABLE_NAME = "users";
exports.NAME_COL = "name";
exports.USERNAME_COL = "username";
exports.PASSWORD_COL = "password";
let User = exports.User = class User extends typeorm_1.BaseEntity {
    validatePassword(password) {
        return this.password === password;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.NAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.USERNAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.PASSWORD_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)("TodoItem", "User"),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "todoItems", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: exports.TABLE_NAME })
], User);
