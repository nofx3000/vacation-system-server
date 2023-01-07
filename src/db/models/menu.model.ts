import { Table, Column, Model } from "sequelize-typescript";

@Table({
  timestamps: false,
})
export default class Menu extends Model {
  @Column({
    allowNull: false,
  })
  label!: string;

  @Column
  path!: string;

  @Column({
    defaultValue: "<AppstoreOutlined />",
  })
  icon!: string;

  @Column
  type!: string;

  @Column
  children!: string;
}
