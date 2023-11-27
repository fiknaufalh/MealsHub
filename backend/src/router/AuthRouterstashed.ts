import { Router, Request, Response } from "express";
import { BAD_REQUEST } from "../constant/httpStatus";
import { Users } from "../model/Users";
import UsersRepo from "../repository/UsersRepo";
// import auth from "../middleware/auth.mid.js";
import handler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config();

const PASSWORD_HASH_SALT_ROUNDS = 10;
const router = Router();

router.get("/test", (req, res) => {
    res.send("test");
});

router.post(
    "/login",
    handler(async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email: email } });

        if (
            user &&
            password ===
                user.password /*(await bcrypt.compare(password, user.password)) */
        ) {
            res.send(generateTokenResponse(user));
            return;
        }

        res.status(BAD_REQUEST).send("Username or password is invalid");
    }),
);

router.post(
    "/register",
    handler(async (req: Request, res: Response) => {
        const { fullname, email, username, password, role } = req.body;

        const user = await Users.findOne({ where: { email: email } });

        if (user) {
            res.status(BAD_REQUEST).send("User already exists, please login!");
            return;
        }

        const hashedPassword = await bcrypt.hash(
            password,
            PASSWORD_HASH_SALT_ROUNDS,
        );

        let maxId: number;
        if (role === "customer") {
            maxId = (await new UsersRepo().getMaxTableId()) + 1;
        } else {
            maxId = (await new UsersRepo().getMaxNonTableId()) + 1;
        }

        const newUser = {
            id: maxId,
            fullname: fullname,
            email: email,
            username: username,
            password: hashedPassword,
            role: role,
        };

        const result = await Users.create(newUser);
        res.send(generateTokenResponse(result));
    }),
);

const generateTokenResponse = (user: Users) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET as unknown as string,
        {
            expiresIn: "30d",
        },
    );

    return {
        id: user.id,
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        token,
    };
};

export default router;
