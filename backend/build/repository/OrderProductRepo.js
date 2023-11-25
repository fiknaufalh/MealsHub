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
/* eslint-disable no-unused-vars */
const OrderProduct_1 = require("../model/OrderProduct");
class OrderProductRepo {
    getAllOrderProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield OrderProduct_1.OrderProduct.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching order products: ${error.message}`);
            }
        });
    }
    getOrderProductById(orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderProduct = yield OrderProduct_1.OrderProduct.findOne({
                    where: { id_order: orderId, id_product: productId },
                });
                if (!orderProduct) {
                    throw new Error(`OrderProduct with orderId ${orderId} and productId ${productId} not found`);
                }
                return orderProduct;
            }
            catch (error) {
                throw new Error(`Error while fetching order product: ${error.message}`);
            }
        });
    }
    createOrderProduct(orderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield OrderProduct_1.OrderProduct.create({
                    id_order: orderProduct.id_order,
                    id_product: orderProduct.id_product,
                    num_product: orderProduct.num_product,
                });
            }
            catch (error) {
                throw new Error(`Error while creating order product: ${error.message}`);
            }
        });
    }
    updateOrderProduct(orderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingOrderProduct = yield OrderProduct_1.OrderProduct.findOne({
                    where: {
                        id_order: orderProduct.id_order,
                        id_product: orderProduct.id_product,
                    },
                });
                if (!existingOrderProduct) {
                    throw new Error(`OrderProduct with orderId ${orderProduct.id_order} and productId ${orderProduct.id_product} not found`);
                }
                existingOrderProduct.num_product = orderProduct.num_product;
                yield existingOrderProduct.save();
            }
            catch (error) {
                throw new Error(`Error while updating order product: ${error.message}`);
            }
        });
    }
    deleteOrderProduct(orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderProduct = yield OrderProduct_1.OrderProduct.findOne({
                    where: { id_order: orderId, id_product: productId },
                });
                if (!orderProduct) {
                    throw new Error(`OrderProduct with orderId ${orderId} and productId ${productId} not found`);
                }
                yield orderProduct.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting order product: ${error.message}`);
            }
        });
    }
}
exports.default = OrderProductRepo;
