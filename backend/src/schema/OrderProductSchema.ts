import { z } from "zod";

export const createOrderProductSchema = z.object({
    body: z.object({
        id_order: z.number(),
        id_product: z.number(),
        num_product: z
            .number()
            .min(1, { message: "Number of products must be at least 1!" }),
    }),
});

export const updateOrderProductSchema = z.object({
    params: z.object({
        id_order: z.number(),
        id_product: z.number(),
    }),
    body: z
        .object({
            num_product: z
                .number()
                .min(1, { message: "Number of products must be at least 1!" }),
        })
        .partial(),
});
