"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.requireAuth = exports.passport = void 0;
const tslib_1 = require("tslib");
const config_1 = require("../config");
const passport_jwt_1 = require("passport-jwt");
const express_1 = tslib_1.__importDefault(require("express"));
const passport_1 = tslib_1.__importDefault(require("passport"));
exports.passport = passport_1.default;
const User_1 = require("../TypeORM/Entities/User");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const passport_local_1 = require("passport-local");
const jwtSecret = config_1.SESSION_SECRET;
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
const localOptions = { usernameField: "username" };
const localStrategy = new passport_local_1.Strategy(localOptions, login_local_strategy_callback);
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};
const jwtStrategy = new passport_jwt_1.Strategy(jwtOptions, jwt_strategy_callback);
passport_1.default.use(localStrategy);
passport_1.default.use(jwtStrategy);
authRouter.post("/login", passport_1.default.authenticate("local", { session: false }), post_login_callback);
const requireAuth = passport_1.default.authenticate("jwt", { session: false });
exports.requireAuth = requireAuth;
function find_user_for_jwt(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.User.findOneBy({ token });
        if (!user) {
            return false;
        }
        return user;
    });
}
function login_local_strategy_callback(username, password, done) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User_1.User.findOneBy({ username });
            if (!user || !user.validatePassword(password)) {
                return done(null, false, {
                    message: "Incorrect username or password.",
                });
            }
            return done(null, user);
        }
        catch (error) {
            return done(error);
        }
    });
}
function post_login_callback(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const payload = { id: req.user.id };
        const token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: "1h" });
        return res.json({ token });
    });
}
function jwt_strategy_callback(payload, done) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield find_user_for_jwt(payload.token);
            return done(null, user);
        }
        catch (error) {
            return done(error, false);
        }
    });
}
