"use strict";
// schema/OrderSchema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderSchema = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        id_table: zod_1.z.number(),
        id_tenant: zod_1.z.number(),
        status: zod_1.z.string(),
        time: zod_1.z.string().nullable(),
    }),
});
exports.updateOrderSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        id_table: zod_1.z.number(),
        id_tenant: zod_1.z.number(),
        status: zod_1.z.string(),
        time: zod_1.z.string().nullable(),
    })
        .partial(),
});
