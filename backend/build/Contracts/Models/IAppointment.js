import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";
export const IAppointmentFaker = () => {
    return {
        id: faker.number.int(),
        status: randomInt(1, 4),
        patient_id: faker.number.int(),
        go_in: faker.date.future(),
        go_out: faker.date.future(),
        serial_number: faker.number.int(),
        tests: [],
    };
};
