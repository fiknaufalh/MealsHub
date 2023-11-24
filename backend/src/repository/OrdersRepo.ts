// OrdersRepo.ts
/* eslint-disable no-unused-vars */
import { Orders } from "../model/Orders";

interface IOrdersRepo {
    getAllOrders(): Promise<Orders[]>;
    getOrderById(orderId: number): Promise<Orders>;
    createOrder(order: Orders): Promise<void>;
    updateOrder(order: Orders): Promise<void>;
    deleteOrder(orderId: number): Promise<void>;
}

export default class OrdersRepo implements IOrdersRepo {
    async getAllOrders(): Promise<Orders[]> {
        try {
            return await Orders.findAll();
        } catch (error: any) {
            throw new Error(`Error while fetching orders: ${error.message}`);
        }
    }

    async getOrderById(orderId: number): Promise<Orders> {
        try {
            const new_order = await Orders.findOne({ where: { id: orderId } });
            if (!new_order) {
                throw new Error(`Order with id ${orderId} not found`);
            }
            return new_order;
        } catch (error: any) {
            throw new Error(`Error while fetching order: ${error.message}`);
        }
    }

    async createOrder(order: Orders): Promise<void> {
        try {
            await Orders.create({
                id: order.id,
                id_table: order.id_table,
                id_tenant: order.id_tenant,
                status: order.status,
                time: order.time,
            });
        } catch (error: any) {
            throw new Error(`Error while creating order: ${error.message}`);
        }
    }

    async updateOrder(order: Orders): Promise<void> {
        try {
            const new_order = await Orders.findOne({ where: { id: order.id } });
            if (!new_order) {
                throw new Error(`Order with id ${order.id} not found`);
            }
            new_order.id_table = order.id_table;
            new_order.id_tenant = order.id_tenant;
            new_order.status = order.status;
            new_order.time = order.time;
            await new_order.save();
        } catch (error: any) {
            throw new Error(`Error while updating order: ${error.message}`);
        }
    }

    async deleteOrder(orderId: number): Promise<void> {
        try {
            const new_order = await Orders.findOne({ where: { id: orderId } });
            if (!new_order) {
                throw new Error(`Order with id ${orderId} not found`);
            }
            await new_order.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting order: ${error.message}`);
        }
    }
}
