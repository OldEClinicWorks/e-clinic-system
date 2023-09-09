"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
exports.ProductController = {
    getProducts: function (req, res) {
        let arr = [];
        return res.status(200).json(arr);
    },
    addProduct: function (req, res) {
        throw new Error("Function not implemented.");
    },
    deleteProduct: function (req, res) {
        throw new Error("Function not implemented.");
    },
};
