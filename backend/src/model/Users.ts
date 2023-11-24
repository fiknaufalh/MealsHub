/* eslint-disable indent */
import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "users",
})
export class Users extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: "id",
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        field: "username",
    })
    username!: string;

    @Column({
        type: DataType.STRING(100),
        field: "fullname",
    })
    fullname!: string;

    @Column({
        type: DataType.STRING(100),
        field: "email",
    })
    email!: string;

    @Column({
        type: DataType.STRING(100),
        field: "password",
    })
    password!: string;

    @Column({
        type: DataType.STRING(20),
        field: "role",
    })
    role!: string;
}
