"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderProductSchema = exports.createOrderProductSchema = void 0;
const zod_1 = require("zod");
exports.createOrderProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        id_order: zod_1.z.number(),
        id_product: zod_1.z.number(),
        num_product: zod_1.z
            .number()
            .min(1, { message: "Number of products must be at least 1!" }),
    }),
});
exports.updateOrderProductSchema = zod_1.z.object({
    params: zod_1.z.object({
        id_order: zod_1.z.number(),
        id_product: zod_1.z.number(),
    }),
    body: zod_1.z
        .object({
        num_product: zod_1.z
            .number()
            .min(1, { message: "Number of products must be at least 1!" }),
    })
        .partial(),
});
