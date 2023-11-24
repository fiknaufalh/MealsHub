import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import TablesRouter from "./router/TablesRouter";
// import NoteRouter from "./router/NoteRouter";

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
        // this.app.use("/api/v1/note", NoteRouter);
    }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
