import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { OrderProduct } from "../model/OrderProduct";
import { Orders } from "../model/Orders";
import { Payments } from "../model/Payments";
import { Products } from "../model/Products";
import { Tables } from "../model/Tables";
import { Tenants } from "../model/Tenants";
import { Users } from "../model/Users";
dotenv.config();

class Database {
    public sequelize: Sequelize | undefined;

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
    private POSTGRES_PASSWORD = process.env
        .POSTGRES_PASSWORD as unknown as string;

    constructor() {
        this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: "postgres",
            models: [
                OrderProduct,
                Orders,
                Payments,
                Products,
                Tables,
                Tenants,
                Users,
            ],
        });

        await this.sequelize
            .authenticate()
            .then(() => {
                console.log(
                    "✅ PostgreSQL Connection has been established successfully.",
                );
            })
            .catch((err) => {
                console.error(
                    "❌ Unable to connect to the PostgreSQL database:",
                    err,
                );
            });
    }
}

export default Database;
