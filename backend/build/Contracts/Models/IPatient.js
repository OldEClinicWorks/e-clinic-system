import { randomInt } from "crypto";
import { faker } from "@faker-js/faker";
export const IPatientFaker = () => {
    return {
        id: randomInt(100),
        name: faker.person.fullName(),
        birth_day: faker.date.birthdate(),
        email: faker.internet.email(),
    };
};
