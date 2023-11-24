// schema/UsersSchema.ts

import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        username: z
            .string()
            .min(1, { message: "Username must be greater than 1 character!" }),
        fullname: z
            .string()
            .min(1, { message: "Fullname must be greater than 1 character!" }),
        email: z.string().email({ message: "Invalid email format!" }),
        password: z
            .string()
            .min(6, { message: "Password must be greater than 6 characters!" }),
        role: z
            .string()
            .min(1, { message: "Role must be greater than 1 character!" }),
    }),
});

export const updateUserSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            username: z
                .string()
                .min(1, {
                    message: "Username must be greater than 1 character!",
                }),
            fullname: z
                .string()
                .min(1, {
                    message: "Fullname must be greater than 1 character!",
                }),
            email: z.string().email({ message: "Invalid email format!" }),
            password: z
                .string()
                .min(6, {
                    message: "Password must be greater than 6 characters!",
                }),
            role: z
                .string()
                .min(1, { message: "Role must be greater than 1 character!" }),
        })
        .partial(),
});
