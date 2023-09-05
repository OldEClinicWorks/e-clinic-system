import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { IUser } from "./Contracts/IUser.js";

@Entity()
export class TodoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ name: "owner_id" })
  ownerId: number;

  @ManyToOne('User', 'TodoItem')
  @JoinColumn({ name: "owner_id" })
  owner: IUser;
}
