"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let TodoItem = exports.TodoItem = class TodoItem extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], TodoItem.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: "title" }),
    tslib_1.__metadata("design:type", String)
], TodoItem.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: "owner_id" }),
    tslib_1.__metadata("design:type", Number)
], TodoItem.prototype, "ownerId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)("User", "TodoItem"),
    (0, typeorm_1.JoinColumn)({ name: "owner_id" }),
    tslib_1.__metadata("design:type", Object)
], TodoItem.prototype, "owner", void 0);
exports.TodoItem = TodoItem = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: "todo_items" })
], TodoItem);
