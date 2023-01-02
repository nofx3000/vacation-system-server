import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class User extends Model {
  @Column
  username!: string;

  @Column
  password!: string;

  @Column
  role!: string;
}
