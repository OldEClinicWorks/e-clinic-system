"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.passport = exports.jwtAuth_middleware = exports.localAuth_middleware = void 0;
const tslib_1 = require("tslib");
const config_1 = require("../../config");
const passport_1 = tslib_1.__importDefault(require("passport"));
exports.passport = passport_1.default;
const express_1 = require("express");
const local_strategy_1 = require("./local/local_strategy");
const jwt_strategy_1 = require("./jwt/jwt_strategy");
const User_1 = require("../../TypeORM/Entities/User");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
const registerMiddleware = (req, res, next) => {
    if (headers_dont_know_secret_pass(req)) {
        return res.status(401).json({ message: "Unauthorized request" });
    }
    next();
};
passport_1.default.use(local_strategy_1.myLocalStrategy);
exports.localAuth_middleware = passport_1.default.authenticate("local", {
    session: false,
});
passport_1.default.use((0, jwt_strategy_1.myJwtStrategy)(config_1.JWT_SECRET));
exports.jwtAuth_middleware = passport_1.default.authenticate("jwt", {
    session: false,
});
const registerUrl = `/__secret__/${config_1.SECRET_URL}/register`;
authRouter.post(registerUrl, registerMiddleware, post_register_callback);
authRouter.post("/login", exports.localAuth_middleware, post_login_callback);
function post_register_callback(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const { name, username, password } = req.body;
            const user = yield User_1.User.create({
                name,
                username,
                password,
            }).save();
            const payload = { id: user.id };
            const token_expires_in = config_1.JWT_TOKEN_EXPIRE_TIME;
            const token = (0, jwt_strategy_1.generate_jwt_token)(payload, config_1.JWT_SECRET, token_expires_in);
            return res
                .status(200)
                .json({ message: "Registeriation success", user, token });
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: "An error has occurred.", error: error.message });
        }
    });
}
function headers_dont_know_secret_pass(req) {
    return req.headers.__secret__ !== config_1.SECRET_URL_PASS;
}
function post_login_callback(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const payload = { id: req.user.id };
        const token_expires_in = config_1.JWT_TOKEN_EXPIRE_TIME;
        const token = (0, jwt_strategy_1.generate_jwt_token)(payload, config_1.JWT_SECRET, token_expires_in);
        return res.json({ token });
    });
}
