"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLocalStrategy = void 0;
const tslib_1 = require("tslib");
const passport_local_1 = require("passport-local");
const User_1 = require("../../TypeORM/Entities/User");
const myLocalOptions = { usernameField: "username" };
const myLocalStrategy = new passport_local_1.Strategy(myLocalOptions, login_local_strategy_callback);
exports.myLocalStrategy = myLocalStrategy;
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
