"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// UsersRepo.ts
/* eslint-disable no-unused-vars */
const Users_1 = require("../model/Users");
class UsersRepo {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Users_1.Users.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching users: ${error.message}`);
            }
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield Users_1.Users.findOne({ where: { id: userId } });
                if (!user) {
                    throw new Error(`User with id ${userId} not found`);
                }
                return user;
            }
            catch (error) {
                throw new Error(`Error while fetching user: ${error.message}`);
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Users_1.Users.create({
                    id: user.id,
                    username: user.username,
                    fullname: user.fullname,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                });
            }
            catch (error) {
                throw new Error(`Error while creating user: ${error.message}`);
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield Users_1.Users.findOne({ where: { id: user.id } });
                if (!updatedUser) {
                    throw new Error(`User with id ${user.id} not found`);
                }
                updatedUser.username = user.username;
                updatedUser.fullname = user.fullname;
                updatedUser.email = user.email;
                updatedUser.password = user.password;
                updatedUser.role = user.role;
                yield updatedUser.save();
            }
            catch (error) {
                throw new Error(`Error while updating user: ${error.message}`);
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield Users_1.Users.findOne({ where: { id: userId } });
                if (!user) {
                    throw new Error(`User with id ${userId} not found`);
                }
                yield user.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting user: ${error.message}`);
            }
        });
    }
}
exports.default = UsersRepo;
