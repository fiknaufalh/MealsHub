"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const TablesRouter_1 = __importDefault(require("./router/TablesRouter"));
const OrdersRouter_1 = __importDefault(require("./router/OrdersRouter"));
const PaymentsRouter_1 = __importDefault(require("./router/PaymentsRouter"));
const UsersRouter_1 = __importDefault(require("./router/UsersRouter"));
const ProductsRouter_1 = __importDefault(require("./router/ProductsRouter"));
const OrderProductRouter_1 = __importDefault(require("./router/OrderProductRouter"));
const TenantsRouter_1 = __importDefault(require("./router/TenantsRouter"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome to MealsHub");
        });
        console.log("✅ Routes loaded!");
        this.app.use("/tables", TablesRouter_1.default);
        this.app.use("/tenants", TenantsRouter_1.default);
        this.app.use("/orders", OrdersRouter_1.default);
        this.app.use("/products", ProductsRouter_1.default);
        this.app.use("/orderproduct", OrderProductRouter_1.default);
        this.app.use("/payments", PaymentsRouter_1.default);
        this.app.use("/users", UsersRouter_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
