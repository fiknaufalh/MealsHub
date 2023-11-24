// router/UsersRouter.ts
import BaseRoutes from "./base/BaseRouter";
import UsersController from "../controller/UsersController";
import validate from "../helper/validate";
import { createUserSchema, updateUserSchema } from "../schema/UsersSchema";
import router from "./food.router";

class UsersRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createUserSchema),
            UsersController.createUser,
        );
        this.router.patch(
            "/:id",
            validate(updateUserSchema),
            UsersController.updateUser,
        );
        this.router.delete("/:id", UsersController.deleteUser);
        this.router.get("", UsersController.getAllUsers);
        this.router.get("/:id", UsersController.getUserById);
    }
}

export default new UsersRoutes().router;
