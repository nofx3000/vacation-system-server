import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Record from "./record.model";
@Table({
  timestamps: false,
})
export default class Phase extends Model {
  @Column({
    allowNull: false,
  })
  destination!: string;
  @Column
  address!: string;

  @Column
  traffic!: string;

  @Column
  tel!: string;

  @Column
  emergency_tel!: string;

  @Column
  comment!: string;

  @Column({
    allowNull: false,
  })
  start_at!: Date;

  @Column({
    allowNull: false,
  })
  end_at!: Date;

  @BelongsTo(() => Record)
  record!: Record;

  @ForeignKey(() => Record)
  @Column
  record_id!: number;
}
