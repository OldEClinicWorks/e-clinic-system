import {
  Strategy as JwtStrategy,
  ExtractJwt,
  VerifiedCallback,
} from "passport-jwt";
import jwt from "jsonwebtoken";
import { User } from "../../../TypeORM/Entities/User";

export const myJwtStrategy = (jwtSecret) => {
  return new JwtStrategy(generateOptions(jwtSecret), jwt_strategy_callback);
};

export function generate_jwt_token(payload, jwtSecret, expiresIn) {
  // serializing the user
  return jwt.sign(payload, jwtSecret, { expiresIn });
}

function generateOptions(jwtSecret) {
  return {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
  };
}

async function jwt_strategy_callback(payload, done) {
  // deserialize the user for jwt
  try {
    const user = await find_user_for_jwt(payload.id);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}

async function find_user_for_jwt(id) {
  const user = await User.findOneBy({ id });
  if (!user) {
    return false;
  }
  return user;
}
