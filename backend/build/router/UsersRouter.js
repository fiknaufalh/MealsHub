"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router/UsersRouter.ts
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const UsersController_1 = __importDefault(require("../controller/UsersController"));
const validate_1 = __importDefault(require("../helper/validate"));
const UsersSchema_1 = require("../schema/UsersSchema");
class UsersRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(UsersSchema_1.createUserSchema), UsersController_1.default.createUser);
        this.router.patch("/:id", (0, validate_1.default)(UsersSchema_1.updateUserSchema), UsersController_1.default.updateUser);
        this.router.delete("/:id", UsersController_1.default.deleteUser);
        this.router.get("", UsersController_1.default.getAllUsers);
        this.router.get("/:id", UsersController_1.default.getUserById);
    }
}
exports.default = new UsersRoutes().router;
