// TenantRouter.ts
import BaseRoutes from "./base/BaseRouter";
import TenantController from "../controller/TenantsController";
import validate from "../helper/validate";
import {
    createTenantSchema,
    updateTenantSchema,
} from "../schema/TenantsSchema";

class TenantsRouter extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createTenantSchema),
            TenantController.createTenant,
        );
        this.router.patch(
            "/:id",
            validate(updateTenantSchema),
            TenantController.updateTenant,
        );
        this.router.delete("/:id", TenantController.deleteTenant);
        this.router.get("", TenantController.getAllTenants);
        this.router.get("/:id", TenantController.getTenantById);
    }
}

export default new TenantsRouter().router;
