import {
  JWT_TOKEN_EXPIRE_TIME,
  JWT_SECRET,
  SECRET_URL,
  SECRET_URL_PASS,
} from "../../config";
import passport from "passport";

import { Router } from "express";
import { myLocalStrategy } from "./local/local_strategy";
import { myJwtStrategy, generate_jwt_token } from "./jwt/jwt_strategy";
import { User } from "../../TypeORM/Entities/User";

const authRouter = Router();
const registerMiddleware = (req, res, next) => {
  if (headers_dont_know_secret_pass(req)) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  next();
};

// Before using token, user needs to login with username and password
passport.use(myLocalStrategy);
export const localAuth_middleware = passport.authenticate("local", {
  session: false,
});

// Configure the JwtStrategy to use User tokens in header
passport.use(myJwtStrategy(JWT_SECRET));
export const jwtAuth_middleware = passport.authenticate("jwt", {
  session: false,
});
const registerUrl = `/__secret__/${SECRET_URL}/register`;
authRouter.post(registerUrl, registerMiddleware, post_register_callback);
authRouter.post("/login", localAuth_middleware, post_login_callback);

async function post_register_callback(req, res) {
  try {
    const { name, username, password } = req.body;

    const user = await User.create({
      name,
      username,
      password,
    }).save();

    const payload = { id: user.id };
    const token_expires_in = JWT_TOKEN_EXPIRE_TIME;
    const token = generate_jwt_token(payload, JWT_SECRET, token_expires_in);

    return res
      .status(200)
      .json({ message: "Registeriation success", user, token });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "An error has occurred.", error: error.message });
  }
}
function headers_dont_know_secret_pass(req) {
  return req.headers.__secret__ !== SECRET_URL_PASS;
}

async function post_login_callback(req, res) {
  // If you reach here, authentication was successful.
  // You can now generate a JWT token and send it back to the client.
  const payload = { id: req.user.id };
  const token_expires_in = JWT_TOKEN_EXPIRE_TIME;
  const token = generate_jwt_token(payload, JWT_SECRET, token_expires_in);

  return res.json({ token });
}

export { passport, authRouter };
