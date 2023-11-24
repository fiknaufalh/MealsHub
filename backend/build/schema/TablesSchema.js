"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTableSchema = exports.createTableSchema = void 0;
const zod_1 = require("zod");
exports.createTableSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.number(),
        num_seat: zod_1.z
            .number()
            .min(1, { message: "Number of seats must be at least 1!" }),
        status: zod_1.z
            .string()
            .min(1, { message: "Status must be at least 1 character!" }),
    }),
});
exports.updateTableSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        num_seat: zod_1.z
            .number()
            .min(1, { message: "Number of seats must be at least 1!" }),
        status: zod_1.z
            .string()
            .min(1, { message: "Status must be at least 1 character!" }),
    })
        .partial(),
});
