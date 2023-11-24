// router/OrdersRouter.ts
import BaseRoutes from "./base/BaseRouter";
import OrdersController from "../controller/OrdersController";
import validate from "../helper/validate";
import { createOrderSchema, updateOrderSchema } from "../schema/OrdersSchema";

class OrdersRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createOrderSchema),
            OrdersController.createOrder,
        );
        this.router.patch(
            "/:id",
            validate(updateOrderSchema),
            OrdersController.updateOrder,
        );
        this.router.delete("/:id", OrdersController.deleteOrder);
        this.router.get("", OrdersController.getAllOrders);
        this.router.get("/:id", OrdersController.getOrderById);
    }
}

export default new OrdersRoutes().router;
