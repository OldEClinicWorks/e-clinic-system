import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { ITodoItem } from "./TodoItem";

export const TABLE_NAME = "users";

export const NAME_COL = "name";
export const USERNAME_COL = "username";
export const PASSWORD_COL = "password";

@Entity({ name: TABLE_NAME })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: NAME_COL })
  name?: string;

  @Column({ name: USERNAME_COL })
  username?: string;

  @Column({ nullable: true })
  token?: string | null;

  @Column({ name: PASSWORD_COL })
  password?: string;

  @OneToMany("TodoItem", "User")
  todoItems?: ITodoItem[];

  validatePassword(password) {
    return this.password === password;
  }
}

export interface IUser {
  // this is used for relationships
  id: number;
  name: string;
}
