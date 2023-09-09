"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductFaker = void 0;
const faker_1 = require("@faker-js/faker");
const crypto_1 = require("crypto");
const IProductFaker = () => {
    return {
        name: faker_1.faker.commerce.productName(),
        isFavorite: (0, crypto_1.randomInt)(100) < 50,
    };
};
exports.IProductFaker = IProductFaker;
