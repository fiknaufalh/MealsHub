"use strict";
// schema/UsersSchema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z
            .string()
            .min(1, { message: "Username must be greater than 1 character!" }),
        fullname: zod_1.z
            .string()
            .min(1, { message: "Fullname must be greater than 1 character!" }),
        email: zod_1.z.string().email({ message: "Invalid email format!" }),
        password: zod_1.z
            .string()
            .min(6, { message: "Password must be greater than 6 characters!" }),
        role: zod_1.z
            .string()
            .min(1, { message: "Role must be greater than 1 character!" }),
    }),
});
exports.updateUserSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        username: zod_1.z
            .string()
            .min(1, {
            message: "Username must be greater than 1 character!",
        }),
        fullname: zod_1.z
            .string()
            .min(1, {
            message: "Fullname must be greater than 1 character!",
        }),
        email: zod_1.z.string().email({ message: "Invalid email format!" }),
        password: zod_1.z
            .string()
            .min(6, {
            message: "Password must be greater than 6 characters!",
        }),
        role: zod_1.z
            .string()
            .min(1, { message: "Role must be greater than 1 character!" }),
    })
        .partial(),
});
