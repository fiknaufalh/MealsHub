"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router/ProductsRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const ProductsController_1 = __importDefault(require("../controller/ProductsController"));
const validate_1 = __importDefault(require("../helper/validate"));
const ProductsSchema_1 = require("../schema/ProductsSchema");
class ProductsRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(ProductsSchema_1.createProductSchema), ProductsController_1.default.createProduct);
        // this.router.post(
        //     "/batch",
        //     validate(createProductSchema),
        //     ProductsController.createBatchProduct,
        // );
        this.router.patch("/:id", (0, validate_1.default)(ProductsSchema_1.updateProductSchema), ProductsController_1.default.updateProduct);
        this.router.delete("/:id", ProductsController_1.default.deleteProduct);
        this.router.get("", ProductsController_1.default.getAllProducts);
        this.router.get("/:id", ProductsController_1.default.getProductById);
    }
}
exports.default = new ProductsRoutes().router;
