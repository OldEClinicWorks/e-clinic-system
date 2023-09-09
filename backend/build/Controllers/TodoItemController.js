"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemController = void 0;
const tslib_1 = require("tslib");
const TodoItem_js_1 = require("../TypeORM/Entities/TodoItem.js");
const User_js_1 = require("../TypeORM/Entities/User.js");
const JwtToken_js_1 = require("../TypeORM/Entities/JwtToken.js");
exports.TodoItemController = {
    getItems(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield User_js_1.User.find();
            const items = yield TodoItem_js_1.TodoItem.find();
            const tokens = yield JwtToken_js_1.JwtToken.find();
            return res.status(200).json({ users, items, tokens });
        });
    },
    getRes(req, res) {
        return res.status(200).json(req.id);
    },
    addItem(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield User_js_1.User.create({
                name: "idrees",
            }).save();
            return res.status(200).json({ status: 1, msg: "should be added.", user });
        });
    },
};
