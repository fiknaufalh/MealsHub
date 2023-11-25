"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TenantRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const TenantsController_1 = __importDefault(require("../controller/TenantsController"));
const validate_1 = __importDefault(require("../helper/validate"));
const TenantsSchema_1 = require("../schema/TenantsSchema");
class TenantsRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(TenantsSchema_1.createTenantSchema), TenantsController_1.default.createTenant);
        this.router.patch("/:id", (0, validate_1.default)(TenantsSchema_1.updateTenantSchema), TenantsController_1.default.updateTenant);
        this.router.delete("/:id", TenantsController_1.default.deleteTenant);
        this.router.get("", TenantsController_1.default.getAllTenants);
        this.router.get("/:id", TenantsController_1.default.getTenantById);
    }
}
exports.default = new TenantsRouter().router;
