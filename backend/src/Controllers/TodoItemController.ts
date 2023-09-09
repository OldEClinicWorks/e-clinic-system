import { ITodoItemController } from "../Contracts/Controllers/ITodoItemController.js";
import { TodoItem } from "../TypeORM/Entities/TodoItem.js";
import { User } from "../TypeORM/Entities/User.js";
import { JwtToken } from "../TypeORM/Entities/JwtToken.js";

// implement secretary interface
export const TodoItemController: ITodoItemController = {
  async getItems(req: any, res: any) {
    const users = await User.find();
    const items = await TodoItem.find();
    const tokens = await JwtToken.find();
    return res.status(200).json({ users, items, tokens });
  },
  getRes(req: any, res: any) {
    return res.status(200).json(req.id);
  },
  async addItem(req: any, res: any) {
    const user = await User.create({
      name: "idrees",
    }).save();

    return res.status(200).json({ status: 1, msg: "should be added.", user });
  },
};
