export interface IUserPhoto {}
// // UserPhoto.ts

// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     Column,
//     ManyToOne,
//     BaseEntity,
//     JoinColumn,
//     OneToOne,
//   } from "typeorm";
//   import { User } from "./User";
//   export constant
//   USER_PHOTOS_TABLE, USER_PHOTOS_ID_COL, USER_PHOTOS_USER_ID_COL, USER_PHOTOS_URL_COL } from "./constants"; // Import the constants

//   @Entity({ name: USER_PHOTOS_TABLE })
//   export class UserPhoto extends BaseEntity {
//     @PrimaryGeneratedColumn({ name: USER_PHOTOS_ID_COL })
//     id?: number;

//     @Column({ name: USER_PHOTOS_USER_ID_COL })
//     userId: number;

//     @Column({ name: USER_PHOTOS_URL_COL })
//     url: string;

//     @OneToOne(() => User, (user) => user.profilePhoto)
//     @JoinColumn({ name: USER_PHOTOS_USER_ID_COL })
//     user: User;
//   }
