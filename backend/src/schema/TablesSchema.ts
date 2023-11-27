import { z } from "zod";

export const createTableSchema = z.object({
    body: z.object({
        id: z.number(),
        num_seat: z
            .number()
            .min(1, { message: "Number of seats must be at least 1!" }),
        status: z
            .string()
            .min(1, { message: "Status must be at least 1 character!" }),
    }),
});

export const updateTableSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            num_seat: z
                .number()
                .min(1, { message: "Number of seats must be at least 1!" }),
            status: z
                .string()
                .min(1, { message: "Status must be at least 1 character!" }),
        })
        .partial(),
});
