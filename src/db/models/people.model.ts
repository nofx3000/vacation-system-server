import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Division from "./divison.model";

@Table({
  timestamps: false,
})
export default class People extends Model {
  @Column({
    allowNull: false,
  })
  name!: string;

  @Column
  catagory!: number;

  @Column
  work_age!: number;

  @Column
  total_holiday!: number;

  @Column({
    defaultValue: true,
  })
  married!: boolean;

  @Column({
    defaultValue: true,
  })
  not_with_parent!: boolean;

  @Column({
    defaultValue: true,
  })
  not_with_partner!: boolean;

  @Column
  comment!: string;

  @ForeignKey(() => Division)
  @Column
  division_id!: number;

  @BelongsTo(() => Division)
  division!: Division;
}
