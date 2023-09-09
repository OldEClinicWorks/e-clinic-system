import { User } from "../Entities/User";
import { SQLiteDataSource } from "../datasrc";

export const UserRepository = SQLiteDataSource.getRepository(User).extend({
  // we can define our own functions here
});
