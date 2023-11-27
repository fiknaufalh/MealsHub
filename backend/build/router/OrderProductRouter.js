"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router/OrderProductRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const OrderProductController_1 = __importDefault(require("../controller/OrderProductController"));
const validate_1 = __importDefault(require("../helper/validate"));
const OrderProductSchema_1 = require("../schema/OrderProductSchema");
class OrderProductRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(OrderProductSchema_1.createOrderProductSchema), OrderProductController_1.default.createOrderProduct);
        this.router.patch("/:orderId/:productId", (0, validate_1.default)(OrderProductSchema_1.updateOrderProductSchema), OrderProductController_1.default.updateOrderProduct);
        this.router.delete("/:orderId/:productId", OrderProductController_1.default.deleteOrderProduct);
        this.router.get("", OrderProductController_1.default.getAllOrderProduct);
        this.router.get("/:orderId/:productId", OrderProductController_1.default.getOrderProductById);
    }
}
exports.default = new OrderProductRoutes().router;
