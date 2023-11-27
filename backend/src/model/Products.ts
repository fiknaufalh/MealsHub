/* eslint-disable indent */
import {
    Model,
    Table,
    Column,
    DataType,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Tenants } from "./Tenants";

@Table({
    tableName: "products",
})
export class Products extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id",
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        field: "description",
    })
    description!: string | null;

    @ForeignKey(() => Tenants)
    @Column({
        type: DataType.INTEGER,
        field: "id_tenant",
    })
    id_tenant!: number;

    @Column({
        type: DataType.STRING(255),
        field: "image",
    })
    image!: string | null;

    @Column({
        type: DataType.STRING(100),
        field: "name",
    })
    name!: string | null;

    @Column({
        type: DataType.FLOAT,
        field: "price",
    })
    price!: number | null;

    @Column({
        type: DataType.INTEGER,
        field: "stock",
    })
    stock!: number | null;

    @BelongsTo(() => Tenants, "id_tenant")
    tenant!: Tenants;
}
