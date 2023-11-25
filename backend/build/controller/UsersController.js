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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../model/Users");
const UsersRepo_1 = __importDefault(require("../repository/UsersRepo"));
class UsersController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new Users_1.Users();
                newUser.id = req.body.id;
                newUser.username = req.body.username;
                newUser.fullname = req.body.fullname;
                newUser.email = req.body.email;
                newUser.password = req.body.password;
                newUser.role = req.body.role;
                yield new UsersRepo_1.default().createUser(newUser);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created user!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params["id"]);
                yield new UsersRepo_1.default().deleteUser(userId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted user!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params["id"]);
                const user = yield new UsersRepo_1.default().getUserById(userId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched user by id!",
                    data: user,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new UsersRepo_1.default().getAllUsers();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all user data!",
                    data: users,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params["id"]);
                const updatedUser = new Users_1.Users();
                updatedUser.id = userId;
                updatedUser.username = req.body.username;
                updatedUser.fullname = req.body.fullname;
                updatedUser.email = req.body.email;
                updatedUser.password = req.body.password;
                updatedUser.role = req.body.role;
                yield new UsersRepo_1.default().updateUser(updatedUser);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated user data!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new UsersController();
