"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtToken = exports.EXPIREY_DATE_COL = exports.IS_REVOKED_COL = exports.TOKEN_COL = exports.TABLE_NAME = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
exports.TABLE_NAME = "jwt_tokens";
exports.TOKEN_COL = "token";
exports.IS_REVOKED_COL = "is_revoked";
exports.EXPIREY_DATE_COL = "expirey_date";
let JwtToken = exports.JwtToken = class JwtToken extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], JwtToken.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.TOKEN_COL }),
    tslib_1.__metadata("design:type", String)
], JwtToken.prototype, "token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.IS_REVOKED_COL, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], JwtToken.prototype, "isRevoked", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.EXPIREY_DATE_COL }),
    tslib_1.__metadata("design:type", Date)
], JwtToken.prototype, "expireyDate", void 0);
exports.JwtToken = JwtToken = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], JwtToken);
