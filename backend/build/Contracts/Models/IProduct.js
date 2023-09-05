import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";
export const IProductFaker = () => {
    return {
        name: faker.commerce.productName(),
        isFavorite: randomInt(100) < 50,
    };
};
