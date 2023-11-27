// schema/OrderSchema.ts

import { z } from "zod";

export const createOrderSchema = z.object({
    body: z.object({
        id_table: z.number(),
        id_tenant: z.number(),
        status: z.string(),
        time: z.string().nullable(),
    }),
});

export const updateOrderSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            id_table: z.number(),
            id_tenant: z.number(),
            status: z.string(),
            time: z.string().nullable(),
        })
        .partial(),
});
