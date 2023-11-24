/* eslint-disable indent */
import {
    Model,
    Table,
    Column,
    DataType,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Orders } from "./Orders";

@Table({
    tableName: "payments",
})
export class Payments extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id",
    })
    id!: number;

    @ForeignKey(() => Orders)
    @Column({
        type: DataType.INTEGER,
        field: "id_order",
    })
    id_order!: number;

    @Column({
        type: DataType.STRING(255),
        field: "status",
    })
    status!: string;

    @BelongsTo(() => Orders, "id_order")
    order!: Orders;
}
