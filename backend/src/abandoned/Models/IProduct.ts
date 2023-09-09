import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";

export interface IProduct {
  name: string;
  isFavorite: boolean;
}

export const IProductFaker = (): IProduct => {
  return {
    name: faker.commerce.productName(),
    isFavorite: randomInt(100) < 50,
  };
};
