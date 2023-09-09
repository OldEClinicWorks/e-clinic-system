import { IProductController } from "../Contracts/Controllers/IPiniaTutorialController.js";

// implement secretary interface
export const ProductController: IProductController = {
  getProducts: function (req: any, res: any): void {
    let arr = [];
    return res.status(200).json(arr);
  },
  addProduct: function (req: any, res: any): void {
    throw new Error("Function not implemented.");
  },
  deleteProduct: function (req: any, res: any): void {
    throw new Error("Function not implemented.");
  },
};
