"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPatientFaker = void 0;
const crypto_1 = require("crypto");
const faker_1 = require("@faker-js/faker");
const IPatientFaker = () => {
    return {
        id: (0, crypto_1.randomInt)(100),
        name: faker_1.faker.person.fullName(),
        birth_day: faker_1.faker.date.birthdate(),
        email: faker_1.faker.internet.email(),
    };
};
exports.IPatientFaker = IPatientFaker;
