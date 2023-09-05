import { IProductController } from "../Contracts/Controllers/IPiniaTutorialController.js";
import { IProductFaker } from "../Contracts/Models/IProduct.js";

// implement secretary interface
export const ProductController: IProductController = {
  getProducts: function (req: any, res: any): void {
    let arr = [];
    for (let index = 0; index < 5; index++) {
      arr.push(IProductFaker());
    }
    return res.status(200).json(arr);
  },
  addProduct: function (req: any, res: any): void {
    throw new Error("Function not implemented.");
  },
  deleteProduct: function (req: any, res: any): void {
    throw new Error("Function not implemented.");
  },
};
