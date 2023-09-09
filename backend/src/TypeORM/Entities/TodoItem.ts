import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { IUser } from "./User";

@Entity({ name: "todo_items" })
export class TodoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "owner_id" })
  ownerId: number;

  @ManyToOne("User", "TodoItem")
  @JoinColumn({ name: "owner_id" })
  owner: IUser;
}

export interface ITodoItem {
  id: number;
  title: string;
  ownerId: number;
}
