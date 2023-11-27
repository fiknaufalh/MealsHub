import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import TablesRouter from "./router/TablesRouter";
import OrdersRouter from "./router/OrdersRouter";
import PaymentsRouter from "./router/PaymentsRouter";
import UsersRouter from "./router/UsersRouter";
import ProductsRouter from "./router/ProductsRouter";
import OrderProductRouter from "./router/OrderProductRouter";
import TenantsRouter from "./router/TenantsRouter";
import AuthRouter from "./router/AuthRouterstashed";
import cors from "cors";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Welcome to MealsHub");
        });
        console.log("✅ Routes loaded!");
        this.app.use("/tables", TablesRouter);
        this.app.use("/tenants", TenantsRouter);
        this.app.use("/orders", OrdersRouter);
        this.app.use("/products", ProductsRouter);
        this.app.use("/orderproduct", OrderProductRouter);
        this.app.use("/payments", PaymentsRouter);
        this.app.use("/users", UsersRouter);
        this.app.use("/auth", AuthRouter);
    }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
