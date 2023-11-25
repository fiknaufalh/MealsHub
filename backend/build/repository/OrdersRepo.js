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
// OrdersRepo.ts
/* eslint-disable no-unused-vars */
const Orders_1 = require("../model/Orders");
class OrdersRepo {
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Orders_1.Orders.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching orders: ${error.message}`);
            }
        });
    }
    getOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_order = yield Orders_1.Orders.findOne({ where: { id: orderId } });
                if (!new_order) {
                    throw new Error(`Order with id ${orderId} not found`);
                }
                return new_order;
            }
            catch (error) {
                throw new Error(`Error while fetching order: ${error.message}`);
            }
        });
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Orders_1.Orders.create({
                    id: order.id,
                    id_table: order.id_table,
                    id_tenant: order.id_tenant,
                    status: order.status,
                    time: order.time,
                });
            }
            catch (error) {
                throw new Error(`Error while creating order: ${error.message}`);
            }
        });
    }
    updateOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_order = yield Orders_1.Orders.findOne({ where: { id: order.id } });
                if (!new_order) {
                    throw new Error(`Order with id ${order.id} not found`);
                }
                new_order.id_table = order.id_table;
                new_order.id_tenant = order.id_tenant;
                new_order.status = order.status;
                new_order.time = order.time;
                yield new_order.save();
            }
            catch (error) {
                throw new Error(`Error while updating order: ${error.message}`);
            }
        });
    }
    deleteOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_order = yield Orders_1.Orders.findOne({ where: { id: orderId } });
                if (!new_order) {
                    throw new Error(`Order with id ${orderId} not found`);
                }
                yield new_order.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting order: ${error.message}`);
            }
        });
    }
}
exports.default = OrdersRepo;
