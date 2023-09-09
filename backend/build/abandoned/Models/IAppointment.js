"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAppointmentFaker = void 0;
const faker_1 = require("@faker-js/faker");
const crypto_1 = require("crypto");
const IAppointmentFaker = () => {
    return {
        id: faker_1.faker.number.int(),
        status: (0, crypto_1.randomInt)(1, 4),
        patient_id: faker_1.faker.number.int(),
        go_in: faker_1.faker.date.future(),
        go_out: faker_1.faker.date.future(),
        serial_number: faker_1.faker.number.int(),
        tests: [],
    };
};
exports.IAppointmentFaker = IAppointmentFaker;
