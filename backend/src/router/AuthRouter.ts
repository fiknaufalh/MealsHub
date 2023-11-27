// router/UsersRouter.ts
import BaseRoutes from "./base/BaseRouter";
import AuthController from "../controller/AuthController";
import validate from "../helper/validate";
import { createUserSchema, loginUserSchema } from "../schema/UsersSchema";

class AuthRouter extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "/login",
            validate(loginUserSchema),
            AuthController.login,
        );
        this.router.post(
            "/register",
            validate(createUserSchema),
            AuthController.register,
        );
    }
}

export default new AuthRouter().router;
