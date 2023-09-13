import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { IUserPhoto } from "./UserPhotoORM"; // Assuming you have a UserPhoto entity

export const TABLE_NAME = "user_table";
export const ID_COL = "id";
export const FIRST_NAME_COL = "first_name";
export const FATHERS_NAME_COL = "fathers_name";
export const GRANDFATHERS_NAME_COL = "grandfathers_name";
export const SURNAME_COL = "surname";
export const DATE_OF_BIRTH_COL = "date_of_birth";
export const HOME_ADDRESS_COL = "home_address";
export const CITY_ID_COL = "city_id";
export const BIO_COL = "bio";
export const OPTIONAL_HOBBIES_COL = "optional_hobbies";
export const GENDER_COL = "gender";
export const PROFILE_PHOTO_ID_COL = "profile_photo_id";
export const USERNAME_COL = "username";
export const PASSWORD_COL = "password";

@Entity({ name: TABLE_NAME })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: ID_COL })
  id?: number;

  @Column({ name: USERNAME_COL })
  username?: string;

  @Column({ nullable: true })
  token?: string | null;

  @Column({ name: PASSWORD_COL })
  password?: string;

  @Column({ name: FIRST_NAME_COL })
  firstName?: string;

  @Column({ name: FATHERS_NAME_COL })
  fathersName?: string;

  @Column({ name: GRANDFATHERS_NAME_COL })
  grandfathersName?: string;

  @Column({ name: SURNAME_COL })
  surname?: string;

  @Column({ name: DATE_OF_BIRTH_COL })
  dateOfBirth?: Date;

  @Column({ name: HOME_ADDRESS_COL })
  homeAddress?: string;

  @Column({ name: BIO_COL, nullable: true })
  bio?: string | null;

  @Column({ name: OPTIONAL_HOBBIES_COL, nullable: true })
  optionalHobbies?: string | null;

  @Column({ name: GENDER_COL })
  gender?: string; // Assuming you store "m" or "f" for gender

  @Column({ name: PROFILE_PHOTO_ID_COL, nullable: true })
  profilePhotoId?: number | null;

  @OneToOne("users", "user_photos")
  @JoinColumn({ name: PROFILE_PHOTO_ID_COL })
  profilePhoto?: IUserPhoto;

  get age(): number | null {
    if (this.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    }
    return null;
  }
}

export interface IUser {
  id: number;
  firstName: string;
  fathersName: string;
  grandfathersName: string;
  surname: string;
  dateOfBirth: Date;
  homeAddress: string;
  bio: string | null;
  optionalHobbies: string | null;
  gender: string;
  profilePhotoId: number | null;
  profilePhoto?: IUserPhoto;
  age: number | null;
}

// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToMany,
//   BaseEntity,
// } from "typeorm";
// import { ITodoItem } from "./TodoItem";

// export const TABLE_NAME = "users";

// export const NAME_COL = "name";
// export const USERNAME_COL = "username";
// export const PASSWORD_COL = "password";

// @Entity({ name: TABLE_NAME })
// export class User extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @Column({ name: NAME_COL })
//   name?: string;

//   @Column({ name: USERNAME_COL })
//   username?: string;

//   @Column({ nullable: true })
//   token?: string | null;

//   @Column({ name: PASSWORD_COL })
//   password?: string;

//   @OneToMany("TodoItem", "User")
//   todoItems?: ITodoItem[];

//   validatePassword(password) {
//     return this.password === password;
//   }
// }

// export interface IUser {
//   // this is used for relationships
//   id: number;
//   name: string;
// }
