/* eslint-disable indent */
import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import { Payments } from "./Payments";
import { Tables } from "./Tables";
import { Tenants } from "./Tenants";
import { OrderProduct } from "./OrderProduct";

@Table({
    tableName: "orders",
})
export class Orders extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id",
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        field: "status",
    })
    status!: string;

    @Column({
        type: DataType.DATE,
        field: "time",
    })
    time!: string;

    @ForeignKey(() => Tables)
    @Column({
        type: DataType.INTEGER,
        field: "id_table",
    })
    id_table!: number;

    @ForeignKey(() => Tenants)
    @Column({
        type: DataType.INTEGER,
        field: "id_tenant",
    })
    id_tenant!: number;

    @BelongsTo(() => Payments, "id_payment")
    payment!: Payments;

    @BelongsTo(() => Tables, "id_table")
    table!: Tables;

    @BelongsTo(() => Tenants, "id_tenant")
    tenant!: Tenants;

    @HasMany(() => OrderProduct, "id_order")
    orderProducts!: OrderProduct[];
}
