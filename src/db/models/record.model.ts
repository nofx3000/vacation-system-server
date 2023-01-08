import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import People from "./people.model";
import Phase from "./phase.model";

@Table({
  timestamps: false,
})
export default class Record extends Model {
  @Column
  discount!: number;

  @BelongsTo(() => People)
  people!: People;

  @HasMany(() => Phase)
  phase!: Phase[];

  @ForeignKey(() => People)
  @Column
  person_id!: number;
}
