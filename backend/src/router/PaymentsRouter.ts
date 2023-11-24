// router/PaymentsRouter.ts
import BaseRoutes from "./base/BaseRouter";
import PaymentsController from "../controller/PaymentsController";
import validate from "../helper/validate";
import {
    createPaymentSchema,
    updatePaymentSchema,
} from "../schema/PaymentsSchema";

class PaymentsRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createPaymentSchema),
            PaymentsController.createPayment,
        );
        this.router.patch(
            "/:id",
            validate(updatePaymentSchema),
            PaymentsController.updatePayment,
        );
        this.router.delete("/:id", PaymentsController.deletePayment);
        this.router.get("", PaymentsController.getAllPayments);
        this.router.get("/:id", PaymentsController.getPaymentById);
    }
}

export default new PaymentsRoutes().router;
