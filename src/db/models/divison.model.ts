import { Table, Column, Model, HasMany } from "sequelize-typescript";
import People from "./people.model";

@Table({
  timestamps: false,
})
export default class Division extends Model {
  @Column({
    allowNull: false,
  })
  name!: string;

  @HasMany(() => People)
  people!: People[];
}
