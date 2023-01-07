import { Table, Column, Model } from "sequelize-typescript";

@Table({
  timestamps: false,
})
export default class User extends Model {
  @Column({
    allowNull: false,
  })
  username!: string;

  @Column({
    allowNull: false,
  })
  password!: string;

  @Column({
    defaultValue: "user",
  })
  role!: string;
}
