// schema/ProductsSchema.ts
import { z } from "zod";

export const createProductSchema = z.object({
    body: z.object({
        description: z
            .string()
            .min(1, {
                message: "Description must be greater than 1 character!",
            }),
        id_tenant: z.number(),
        image: z.string(),
        name: z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        price: z
            .number()
            .min(0, { message: "Price must be greater than or equal to 0!" }),
        stock: z
            .number()
            .min(0, { message: "Stock must be greater than or equal to 0!" }),
    }),
});

export const updateProductSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            description: z
                .string()
                .min(1, {
                    message: "Description must be greater than 1 character!",
                }),
            id_tenant: z.number(),
            image: z.string(),
            name: z
                .string()
                .min(1, { message: "Name must be greater than 1 character!" }),
            price: z
                .number()
                .min(0, {
                    message: "Price must be greater than or equal to 0!",
                }),
            stock: z
                .number()
                .min(0, {
                    message: "Stock must be greater than or equal to 0!",
                }),
        })
        .partial(),
});
