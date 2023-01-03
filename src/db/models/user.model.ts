import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class User extends Model {
  @Column({
    allowNull: false,
  })
  username!: string;

  @Column({
    allowNull: false,
  })
  password!: string;

  @Column
  role!: string;
}
