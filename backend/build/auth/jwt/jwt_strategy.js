"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_jwt_token = exports.myJwtStrategy = void 0;
const tslib_1 = require("tslib");
const passport_jwt_1 = require("passport-jwt");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const User_1 = require("../../TypeORM/Entities/User");
const myJwtStrategy = (jwtSecret) => {
    return new passport_jwt_1.Strategy(generateOptions(jwtSecret), jwt_strategy_callback);
};
exports.myJwtStrategy = myJwtStrategy;
function generate_jwt_token(payload, jwtSecret, expiresIn) {
    return jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn });
}
exports.generate_jwt_token = generate_jwt_token;
function generateOptions(jwtSecret) {
    return {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
    };
}
function jwt_strategy_callback(payload, done) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield find_user_for_jwt(payload.id);
            return done(null, user);
        }
        catch (error) {
            return done(error, false);
        }
    });
}
function find_user_for_jwt(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.User.findOneBy({ id });
        if (!user) {
            return false;
        }
        return user;
    });
}
