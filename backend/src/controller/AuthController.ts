import { Request, Response } from "express";
import { Users } from "../model/Users";
import UsersRepo from "../repository/UsersRepo";

import { BAD_REQUEST } from "../constant/httpStatus";
// import auth from "../middleware/auth.mid.js";
// import handler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config();

const PASSWORD_HASH_SALT_ROUNDS = 10;

class AuthController {
    generateTokenResponse(user: Users) {
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
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password, role } = req.body;
            console.log(`role: ${role} email: ${email} password: ${password}`);

            if (role === "tenant-cashier") {
                console.log("masuk tenant-cashier");
                const user = await new UsersRepo().getUserByEmail(email);
                console.log(`User ${user.email} nih! ${user.password}`);

                if (
                    user &&
                    password ==
                        user.password /* && (await bcrypt.compare(password, user.password)) */
                ) {
                    console.log(`User ${user.email} logged in!`);
                    res.send(this.generateTokenResponse(user));
                    return;
                }

                res.status(BAD_REQUEST).send("Username or password is invalid");
            } else if (role === "customer") {
                // email is num_seat, password is id_table
                console.log("dah bener woi");
                const user = await new UsersRepo().getUserById(email);

                if (user) {
                    console.log(`User ${user.email} logged in!`);
                    res.send(this.generateTokenResponse(user));
                    return;
                }

                res.status(BAD_REQUEST).send("Username or password is invalid");
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { name, email, password, address } = req.body;

            const user = await Users.findOne({ where: { email: email } });

            if (user) {
                res.status(BAD_REQUEST).send(
                    "User already exists, please login!",
                );
                return;
            }

            const hashedPassword = await bcrypt.hash(
                password,
                PASSWORD_HASH_SALT_ROUNDS,
            );

            const newUser = {
                name,
                email: email.toLowerCase(),
                password: hashedPassword,
                address,
            };

            const result = await Users.create(newUser);
            res.send(this.generateTokenResponse(result));
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new AuthController();
