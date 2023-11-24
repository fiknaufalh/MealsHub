"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router/OrdersRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const OrdersController_1 = __importDefault(require("../controller/OrdersController"));
const validate_1 = __importDefault(require("../helper/validate"));
const OrdersSchema_1 = require("../schema/OrdersSchema");
class OrdersRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(OrdersSchema_1.createOrderSchema), OrdersController_1.default.createOrder);
        this.router.patch("/:id", (0, validate_1.default)(OrdersSchema_1.updateOrderSchema), OrdersController_1.default.updateOrder);
        this.router.delete("/:id", OrdersController_1.default.deleteOrder);
        this.router.get("", OrdersController_1.default.getAllOrders);
        this.router.get("/:id", OrdersController_1.default.getOrderById);
    }
}
exports.default = new OrdersRoutes().router;
