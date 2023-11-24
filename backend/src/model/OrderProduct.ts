/* eslint-disable indent */
import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Table({
    tableName: "order_product",
})
export class OrderProduct extends Model {
    @ForeignKey(() => Orders)
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id_order",
    })
    id_order!: number;

    @ForeignKey(() => Products)
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id_product",
    })
    id_product!: number;

    @Column({
        type: DataType.INTEGER,
        field: "num_product",
    })
    num_product!: number;

    @BelongsTo(() => Orders, "id_order")
    order!: Orders;

    @BelongsTo(() => Products, "id_product")
    product!: Products;
}
