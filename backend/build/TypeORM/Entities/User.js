import { __decorate, __metadata } from "tslib";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, } from "typeorm";
let User = class User extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    OneToMany("TodoItem", "User"),
    __metadata("design:type", Array)
], User.prototype, "todoItems", void 0);
User = __decorate([
    Entity()
], User);
export { User };
