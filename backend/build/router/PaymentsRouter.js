"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router/PaymentsRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const PaymentsController_1 = __importDefault(require("../controller/PaymentsController"));
const validate_1 = __importDefault(require("../helper/validate"));
const PaymentsSchema_1 = require("../schema/PaymentsSchema");
class PaymentsRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(PaymentsSchema_1.createPaymentSchema), PaymentsController_1.default.createPayment);
        this.router.patch("/:id", (0, validate_1.default)(PaymentsSchema_1.updatePaymentSchema), PaymentsController_1.default.updatePayment);
        this.router.delete("/:id", PaymentsController_1.default.deletePayment);
        this.router.get("", PaymentsController_1.default.getAllPayments);
        this.router.get("/:id", PaymentsController_1.default.getPaymentById);
    }
}
exports.default = new PaymentsRoutes().router;
