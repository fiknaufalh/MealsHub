"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// ProductsRepo.ts
/* eslint-disable no-unused-vars */
const Products_1 = require("../model/Products");
class ProductsRepo {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Products_1.Products.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching products: ${error.message}`);
            }
        });
    }
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Products_1.Products.findOne({
                    where: { id: productId },
                });
                if (!product) {
                    throw new Error(`Product with id ${productId} not found`);
                }
                return product;
            }
            catch (error) {
                throw new Error(`Error while fetching product: ${error.message}`);
            }
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Products_1.Products.create({
                    id: product.id,
                    description: product.description,
                    id_tenant: product.id_tenant,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    stock: product.stock,
                });
            }
            catch (error) {
                throw new Error(`Error while creating product: ${error.message}`);
            }
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProduct = yield Products_1.Products.findOne({
                    where: { id: product.id },
                });
                if (!existingProduct) {
                    throw new Error(`Product with id ${product.id} not found`);
                }
                existingProduct.description = product.description;
                existingProduct.id_tenant = product.id_tenant;
                existingProduct.image = product.image;
                existingProduct.name = product.name;
                existingProduct.price = product.price;
                existingProduct.stock = product.stock;
                yield existingProduct.save();
            }
            catch (error) {
                throw new Error(`Error while updating product: ${error.message}`);
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Products_1.Products.findOne({
                    where: { id: productId },
                });
                if (!product) {
                    throw new Error(`Product with id ${productId} not found`);
                }
                yield product.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting product: ${error.message}`);
            }
        });
    }
}
exports.default = ProductsRepo;
