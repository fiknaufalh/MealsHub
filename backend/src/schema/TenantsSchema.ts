// # schema/TenantSchema.ts

import { z } from "zod";

export const createTenantSchema = z.object({
    body: z.object({
        name: z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        close_hour: z.string().nullable(),
        open_hour: z.string().nullable(),
        description: z.string().nullable(),
        rating: z.number().nullable(),
    }),
});

export const updateTenantSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            name: z
                .string()
                .min(1, { message: "Name must be greater than 1 character!" }),
            close_hour: z.string().nullable(),
            open_hour: z.string().nullable(),
            description: z.string().nullable(),
            rating: z.number().nullable(),
        })
        .partial(),
});
