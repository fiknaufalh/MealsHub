// # schema/PaymentsSchema.ts

import { z } from "zod";

export const createPaymentSchema = z.object({
    body: z.object({
        id_order: z.number(),
        status: z.string(),
    }),
});

export const updatePaymentSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            id_order: z.number(),
            status: z.string(),
        })
        .partial(),
});
