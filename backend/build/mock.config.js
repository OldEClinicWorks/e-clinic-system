"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockConfig = void 0;
const faker_1 = require("@faker-js/faker");
exports.mockConfig = {
    primitiveValues: {
        xName: faker_1.faker.person.fullName(),
        Date: faker_1.faker.date.birthdate(),
        xEmail: faker_1.faker.internet.email(),
    },
};
