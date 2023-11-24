/* eslint-disable no-unused-vars */
import { OrderProduct } from "../model/OrderProduct";

interface IOrderProductRepo {
    getAllOrderProduct(): Promise<OrderProduct[]>;
    getOrderProductById(
        orderId: number,
        productId: number,
    ): Promise<OrderProduct>;
    createOrderProduct(orderProduct: OrderProduct): Promise<void>;
    updateOrderProduct(orderProduct: OrderProduct): Promise<void>;
    deleteOrderProduct(orderId: number, productId: number): Promise<void>;
}

export default class OrderProductRepo implements IOrderProductRepo {
    async getAllOrderProduct(): Promise<OrderProduct[]> {
        try {
            return await OrderProduct.findAll();
        } catch (error: any) {
            throw new Error(
                `Error while fetching order products: ${error.message}`,
            );
        }
    }

    async getOrderProductById(
        orderId: number,
        productId: number,
    ): Promise<OrderProduct> {
        try {
            const orderProduct = await OrderProduct.findOne({
                where: { id_order: orderId, id_product: productId },
            });
            if (!orderProduct) {
                throw new Error(
                    `OrderProduct with orderId ${orderId} and productId ${productId} not found`,
                );
            }
            return orderProduct;
        } catch (error: any) {
            throw new Error(
                `Error while fetching order product: ${error.message}`,
            );
        }
    }

    async createOrderProduct(orderProduct: OrderProduct): Promise<void> {
        try {
            await OrderProduct.create({
                id_order: orderProduct.id_order,
                id_product: orderProduct.id_product,
                num_product: orderProduct.num_product,
            });
        } catch (error: any) {
            throw new Error(
                `Error while creating order product: ${error.message}`,
            );
        }
    }

    async updateOrderProduct(orderProduct: OrderProduct): Promise<void> {
        try {
            const existingOrderProduct = await OrderProduct.findOne({
                where: {
                    id_order: orderProduct.id_order,
                    id_product: orderProduct.id_product,
                },
            });
            if (!existingOrderProduct) {
                throw new Error(
                    `OrderProduct with orderId ${orderProduct.id_order} and productId ${orderProduct.id_product} not found`,
                );
            }

            existingOrderProduct.num_product = orderProduct.num_product;
            await existingOrderProduct.save();
        } catch (error: any) {
            throw new Error(
                `Error while updating order product: ${error.message}`,
            );
        }
    }

    async deleteOrderProduct(
        orderId: number,
        productId: number,
    ): Promise<void> {
        try {
            const orderProduct = await OrderProduct.findOne({
                where: { id_order: orderId, id_product: productId },
            });
            if (!orderProduct) {
                throw new Error(
                    `OrderProduct with orderId ${orderId} and productId ${productId} not found`,
                );
            }

            await orderProduct.destroy();
        } catch (error: any) {
            throw new Error(
                `Error while deleting order product: ${error.message}`,
            );
        }
    }
}
