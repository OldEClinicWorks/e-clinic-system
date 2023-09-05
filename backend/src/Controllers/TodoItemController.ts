import { ITodoItemController } from "../Contracts/Controllers/ITodoItemController.js";
import { User } from "../TypeORM/Entities/User.js";

// implement secretary interface
export const TodoItemController: ITodoItemController = {
  async getItems(req: any, res: any) {
    const user = await User.find();

    return res.status(200).json(user);
  },
  getRes(req: any, res: any) {
    return res.status(200).json(req.id);
  },
};
