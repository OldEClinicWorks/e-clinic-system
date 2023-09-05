import { randomInt } from "crypto";
import { xEmail, xName } from "../../CustomTypes/xTypes";
import { faker } from "@faker-js/faker";

export interface IPatient {
  id: number;
  name: xName;
  birth_day: Date;
  email: xEmail;
}

export const IPatientFaker = (): IPatient => {
  return {
    id: randomInt(100),
    name: faker.person.fullName(),
    birth_day: faker.date.birthdate(),
    email: faker.internet.email(),
  };
};
