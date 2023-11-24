// controller/UsersController.ts
import { Request, Response } from "express";
import { Users } from "../model/Users";
import UsersRepo from "../repository/UsersRepo";

class UsersController {
    async createUser(req: Request, res: Response) {
        try {
            const newUser = new Users();
            newUser.id = req.body.id;
            newUser.username = req.body.username;
            newUser.fullname = req.body.fullname;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.role = req.body.role;

            await new UsersRepo().createUser(newUser);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created user!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params["id"]);
            await new UsersRepo().deleteUser(userId);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted user!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params["id"]);
            const user = await new UsersRepo().getUserById(userId);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched user by id!",
                data: user,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await new UsersRepo().getAllUsers();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all user data!",
                data: users,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params["id"]);
            const updatedUser = new Users();

            updatedUser.id = userId;
            updatedUser.username = req.body.username;
            updatedUser.fullname = req.body.fullname;
            updatedUser.email = req.body.email;
            updatedUser.password = req.body.password;
            updatedUser.role = req.body.role;

            await new UsersRepo().updateUser(updatedUser);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated user data!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new UsersController();
