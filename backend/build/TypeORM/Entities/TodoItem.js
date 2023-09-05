import { __decorate, __metadata } from "tslib";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity, } from "typeorm";
let TodoItem = class TodoItem extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TodoItem.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TodoItem.prototype, "title", void 0);
__decorate([
    Column({ name: "owner_id" }),
    __metadata("design:type", Number)
], TodoItem.prototype, "ownerId", void 0);
__decorate([
    ManyToOne('User', 'TodoItem'),
    JoinColumn({ name: "owner_id" }),
    __metadata("design:type", Object)
], TodoItem.prototype, "owner", void 0);
TodoItem = __decorate([
    Entity()
], TodoItem);
export { TodoItem };
