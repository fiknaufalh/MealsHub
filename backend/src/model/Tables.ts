/* eslint-disable indent */
import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: Tables.TABLE_NAME,
})
export class Tables extends Model {
    public static TABLE_NAME = "tables" as string;
    public static TABLES_ID = "id" as string;
    public static TABLES_NUM_SEAT = "num_seat" as string;
    public static TABLES_STATUS = "status" as string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Tables.TABLES_ID,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        field: Tables.TABLES_NUM_SEAT,
    })
    num_seat!: number;

    @Column({
        type: DataType.STRING(100),
        field: Tables.TABLES_STATUS,
    })
    status!: string;
}
