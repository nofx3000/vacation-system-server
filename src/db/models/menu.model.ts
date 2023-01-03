import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class Menu extends Model {
  @Column({
    allowNull: false,
  })
  label!: string;

  @Column
  path!: string;

  @Column({
    defaultValue: "gears",
  })
  icon!: string;

  @Column
  type!: string;

  @Column
  chilren!: string;
}
