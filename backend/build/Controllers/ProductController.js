import { IProductFaker } from "../Contracts/Models/IProduct.js";
// implement secretary interface
export const ProductController = {
    getProducts: function (req, res) {
        let arr = [];
        for (let index = 0; index < 5; index++) {
            arr.push(IProductFaker());
        }
        return res.status(200).json(arr);
    },
    addProduct: function (req, res) {
        throw new Error("Function not implemented.");
    },
    deleteProduct: function (req, res) {
        throw new Error("Function not implemented.");
    },
};
