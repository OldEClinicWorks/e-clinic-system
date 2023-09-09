import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  OneToOne,
} from "typeorm";

export const TABLE_NAME = "jwt_tokens";
export const TOKEN_COL = "token";
export const IS_REVOKED_COL = "is_revoked";
export const EXPIREY_DATE_COL = "expirey_date";

@Entity()
export class JwtToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: TOKEN_COL })
  token?: string;

  @Column({ name: IS_REVOKED_COL, default: false })
  isRevoked?: boolean;

  @Column({ name: EXPIREY_DATE_COL })
  expireyDate: Date;
}

export interface IJwtToken {
  id: number;
  token: string;
}
