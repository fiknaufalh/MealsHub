"use strict";
// # schema/TenantSchema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTenantSchema = exports.createTenantSchema = void 0;
const zod_1 = require("zod");
exports.createTenantSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        close_hour: zod_1.z.string().nullable(),
        open_hour: zod_1.z.string().nullable(),
        description: zod_1.z.string().nullable(),
        rating: zod_1.z.number().nullable(),
        image: zod_1.z.string().nullable(),
    }),
});
exports.updateTenantSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        close_hour: zod_1.z.string().nullable(),
        open_hour: zod_1.z.string().nullable(),
        description: zod_1.z.string().nullable(),
        rating: zod_1.z.number().nullable(),
        image: zod_1.z.string().nullable(),
    })
        .partial(),
});
