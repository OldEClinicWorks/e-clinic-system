import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";
import { ITest } from "./ITest";
export interface IAppointment {
  id: number;
  status: number;
  patient_id: number;
  go_in: Date;
  go_out: Date;
  serial_number: number; // تسلسل
  tests: [];
}

export const IAppointmentFaker = (): IAppointment => {
  return {
    id: faker.number.int(),
    status: randomInt(1, 4),
    patient_id: faker.number.int(),
    go_in: faker.date.future(),
    go_out: faker.date.future(),
    serial_number: faker.number.int(), // تسلسل
    tests: [],
  };
};
