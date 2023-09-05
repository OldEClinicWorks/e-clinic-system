import { __awaiter } from "tslib";
import { User } from "../TypeORM/Entities/User.js";
// implement secretary interface
export const TodoItemController = {
    getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.find();
            return res.status(200).json(user);
        });
    },
    getRes(req, res) {
        return res.status(200).json(req.id);
    },
};
