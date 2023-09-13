"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.PASSWORD_COL = exports.USERNAME_COL = exports.PROFILE_PHOTO_ID_COL = exports.GENDER_COL = exports.OPTIONAL_HOBBIES_COL = exports.BIO_COL = exports.HOME_ADDRESS_COL = exports.DATE_OF_BIRTH_COL = exports.SURNAME_COL = exports.GRANDFATHERS_NAME_COL = exports.FATHERS_NAME_COL = exports.FIRST_NAME_COL = exports.ID_COL = exports.TABLE_NAME = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
exports.TABLE_NAME = "user_table";
exports.ID_COL = "id";
exports.FIRST_NAME_COL = "first_name";
exports.FATHERS_NAME_COL = "fathers_name";
exports.GRANDFATHERS_NAME_COL = "grandfathers_name";
exports.SURNAME_COL = "surname";
exports.DATE_OF_BIRTH_COL = "date_of_birth";
exports.HOME_ADDRESS_COL = "home_address";
exports.BIO_COL = "bio";
exports.OPTIONAL_HOBBIES_COL = "optional_hobbies";
exports.GENDER_COL = "gender";
exports.PROFILE_PHOTO_ID_COL = "profile_photo_id";
exports.USERNAME_COL = "username";
exports.PASSWORD_COL = "password";
let User = exports.User = class User extends typeorm_1.BaseEntity {
    get age() {
        if (this.dateOfBirth) {
            const today = new Date();
            const birthDate = new Date(this.dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        return null;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: exports.ID_COL }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
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
    (0, typeorm_1.Column)({ name: exports.FIRST_NAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.FATHERS_NAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "fathersName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.GRANDFATHERS_NAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "grandfathersName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.SURNAME_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "surname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.DATE_OF_BIRTH_COL }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.HOME_ADDRESS_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "homeAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.BIO_COL, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.OPTIONAL_HOBBIES_COL, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "optionalHobbies", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.GENDER_COL }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: exports.PROFILE_PHOTO_ID_COL, nullable: true }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "profilePhotoId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)("users", "user_photos"),
    (0, typeorm_1.JoinColumn)({ name: exports.PROFILE_PHOTO_ID_COL }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "profilePhoto", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: exports.TABLE_NAME })
], User);
