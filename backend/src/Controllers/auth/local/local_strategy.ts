import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../../../TypeORM/Entities/User";

const myLocalOptions = { usernameField: "username" };
const myLocalStrategy = new LocalStrategy(
  myLocalOptions,
  login_local_strategy_callback
);

async function login_local_strategy_callback(username, password, done) {
  try {
    // Find the user with the provided username in your database
    const user = await User.findOneBy({ username });

    // If the user doesn't exist or the password is incorrect, return an error
    if (!user || !user.validatePassword(password)) {
      return done(null, false, {
        message: "Incorrect username or password.",
      });
    }

    // If the username and password are correct, return the user object
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}

export { myLocalStrategy };
