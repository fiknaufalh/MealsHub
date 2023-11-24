/* eslint-disable indent */
import {
    Model,
    Table,
    Column,
    DataType,
    BelongsTo,
    HasMany,
    ForeignKey,
} from "sequelize-typescript";
import { Users } from "./Users";
import { Orders } from "./Orders";

@Table({
    tableName: "tenants",
})
export class Tenants extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id",
    })
    id!: number;

    @Column({
        type: DataType.STRING(50),
        field: "name",
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        field: "close_hour",
    })
    close_hour!: string | null;

    @Column({
        type: DataType.STRING,
        field: "open_hour",
    })
    open_hour!: string | null;

    @Column({
        type: DataType.STRING(255),
        field: "description",
    })
    description!: string | null;

    @Column({
        type: DataType.FLOAT,
        field: "rating",
    })
    rating!: number | null;

    @ForeignKey(() => Users)
    @BelongsTo(() => Users, "id")
    user!: Users;

    @HasMany(() => Orders, "id_tenant")
    orders!: Orders[];
}
