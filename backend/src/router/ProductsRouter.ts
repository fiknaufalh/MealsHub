// router/ProductsRouter.ts
import BaseRoutes from "./base/BaseRouter";
import ProductsController from "../controller/ProductsController";
import validate from "../helper/validate";
import {
    createProductSchema,
    updateProductSchema,
} from "../schema/ProductsSchema";

class ProductsRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createProductSchema),
            ProductsController.createProduct,
        );
        // this.router.post(
        //     "/batch",
        //     validate(createProductSchema),
        //     ProductsController.createBatchProduct,
        // );
        this.router.patch(
            "/:id",
            validate(updateProductSchema),
            ProductsController.updateProduct,
        );
        this.router.delete("/:id", ProductsController.deleteProduct);
        this.router.get("", ProductsController.getAllProducts);
        this.router.get("/:id", ProductsController.getProductById);
    }
}

export default new ProductsRoutes().router;
