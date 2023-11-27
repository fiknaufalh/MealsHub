// UsersRepo.ts
/* eslint-disable no-unused-vars */
import { Users } from "../model/Users";
import { Op } from "sequelize";

interface IUsersRepo {
    getAllUsers(): Promise<Users[]>;
    getUserById(userId: number): Promise<Users>;
    createUser(user: Users): Promise<void>;
    updateUser(user: Users): Promise<void>;
    deleteUser(userId: number): Promise<void>;
}

export default class UsersRepo implements IUsersRepo {
    async getAllUsers(): Promise<Users[]> {
        try {
            return await Users.findAll();
        } catch (error: any) {
            throw new Error(`Error while fetching users: ${error.message}`);
        }
    }

    async getUserById(userId: number): Promise<Users> {
        try {
            const user = await Users.findOne({ where: { id: userId } });
            if (!user) {
                throw new Error(`User with id ${userId} not found`);
            }
            return user;
        } catch (error: any) {
            throw new Error(`Error while fetching user: ${error.message}`);
        }
    }

    async getUserByEmail(email: string): Promise<Users> {
        try {
            console.log(email);
            const user = await Users.findOne({ where: { email } });
            if (!user) {
                throw new Error(`User with email ${email} not found`);
            }
            return user;
        } catch (error: any) {
            throw new Error(`Error while fetching user: ${error.message}`);
        }
    }

    async getMaxTableId(): Promise<number> {
        try {
            const users = await Users.findAll({ where: { role: "customer" } });

            if (users.length > 0) {
                const maxId = Math.max(...users.map((user) => user.id));
                return maxId;
            }

            return 0;
        } catch (error: any) {
            throw new Error(`Error while fetching max id: ${error.message}`);
        }
    }

    async getMaxNonTableId(): Promise<number> {
        try {
            const users = await Users.findAll({
                where: {
                    role: {
                        [Op.or]: ["tenant", "cashier"],
                    },
                },
            });

            if (users.length > 0) {
                const maxId = Math.max(...users.map((user) => user.id));
                return maxId;
            }

            return 0;
        } catch (error: any) {
            throw new Error(`Error while fetching max id: ${error.message}`);
        }
    }

    async createUser(user: Users): Promise<void> {
        try {
            await Users.create({
                id: user.id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                password: user.password,
                role: user.role,
            });
        } catch (error: any) {
            throw new Error(`Error while creating user: ${error.message}`);
        }
    }

    async updateUser(user: Users): Promise<void> {
        try {
            const updatedUser = await Users.findOne({ where: { id: user.id } });
            if (!updatedUser) {
                throw new Error(`User with id ${user.id} not found`);
            }

            updatedUser.username = user.username;
            updatedUser.fullname = user.fullname;
            updatedUser.email = user.email;
            updatedUser.password = user.password;
            updatedUser.role = user.role;

            await updatedUser.save();
        } catch (error: any) {
            throw new Error(`Error while updating user: ${error.message}`);
        }
    }

    async deleteUser(userId: number): Promise<void> {
        try {
            const user = await Users.findOne({ where: { id: userId } });
            if (!user) {
                throw new Error(`User with id ${userId} not found`);
            }
            await user.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting user: ${error.message}`);
        }
    }
}
