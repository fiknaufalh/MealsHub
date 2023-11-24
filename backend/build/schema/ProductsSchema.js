"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
// schema/ProductsSchema.ts
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        description: zod_1.z
            .string()
            .min(1, {
            message: "Description must be greater than 1 character!",
        }),
        id_tenant: zod_1.z.number(),
        image: zod_1.z.string(),
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        price: zod_1.z
            .number()
            .min(0, { message: "Price must be greater than or equal to 0!" }),
        stock: zod_1.z
            .number()
            .min(0, { message: "Stock must be greater than or equal to 0!" }),
    }),
});
exports.updateProductSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        description: zod_1.z
            .string()
            .min(1, {
            message: "Description must be greater than 1 character!",
        }),
        id_tenant: zod_1.z.number(),
        image: zod_1.z.string(),
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 character!" }),
        price: zod_1.z
            .number()
            .min(0, {
            message: "Price must be greater than or equal to 0!",
        }),
        stock: zod_1.z
            .number()
            .min(0, {
            message: "Stock must be greater than or equal to 0!",
        }),
    })
        .partial(),
});
