"use strict";
// # schema/PaymentsSchema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePaymentSchema = exports.createPaymentSchema = void 0;
const zod_1 = require("zod");
exports.createPaymentSchema = zod_1.z.object({
    body: zod_1.z.object({
        id_order: zod_1.z.number(),
        status: zod_1.z.string(),
    }),
});
exports.updatePaymentSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        id_order: zod_1.z.number(),
        status: zod_1.z.string(),
    })
        .partial(),
});
