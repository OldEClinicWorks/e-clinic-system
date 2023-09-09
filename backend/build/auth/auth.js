"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.passport = exports.jwtAuth_middleware = exports.localAuth_middleware = void 0;
const tslib_1 = require("tslib");
const config_1 = require("../config");
const passport_1 = tslib_1.__importDefault(require("passport"));
exports.passport = passport_1.default;
const express_1 = require("express");
const local_strategy_1 = require("./local/local_strategy");
const jwt_strategy_1 = require("./jwt/jwt_strategy");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
passport_1.default.use(local_strategy_1.myLocalStrategy);
exports.localAuth_middleware = passport_1.default.authenticate("local", {
    session: false,
});
passport_1.default.use((0, jwt_strategy_1.myJwtStrategy)(config_1.JWT_SECRET));
exports.jwtAuth_middleware = passport_1.default.authenticate("jwt", {
    session: false,
});
authRouter.post("/login", exports.localAuth_middleware, post_login_callback);
function post_login_callback(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const payload = { id: req.user.id };
        const token_expires_in = config_1.JWT_TOKEN_EXPIRE_TIME;
        const token = (0, jwt_strategy_1.generate_jwt_token)(payload, config_1.JWT_SECRET, token_expires_in);
        return res.json({ token });
    });
}
