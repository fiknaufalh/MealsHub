import { Request, Response } from "express";
import { OrderProduct } from "../model/OrderProduct";
import OrderProductRepo from "../repository/OrderProductRepo";

class OrderProductController {
    async createOrderProduct(req: Request, res: Response) {
        try {
            const newOrderProduct = await new OrderProduct();
            newOrderProduct.id_order = req.body.id_order;
            newOrderProduct.id_product = req.body.id_product;
            newOrderProduct.num_product = req.body.num_product;

            await new OrderProductRepo().createOrderProduct(newOrderProduct);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created order product!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async createOrderProductBulk(req: Request, res: Response) {
        try {
            const newOrderProducts = req.body.map(
                (orderProduct: OrderProduct) => {
                    const newOrderProduct = new OrderProduct();
                    newOrderProduct.id_order = orderProduct.id_order;
                    newOrderProduct.id_product = orderProduct.id_product;
                    newOrderProduct.num_product = orderProduct.num_product;

                    return newOrderProduct;
                },
            );

            console.log(newOrderProducts);
            await new OrderProductRepo().createOrderProductBulk(
                newOrderProducts,
            );

            res.status(201).json({
                status: "Created!",
                message: "Successfully created order product batch!",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteOrderProduct(req: Request, res: Response) {
        try {
            const id_order = parseInt(req.params["id_order"]);
            const id_product = parseInt(req.params["id_product"]);

            await new OrderProductRepo().deleteOrderProduct(
                id_order,
                id_product,
            );

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted order product!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getOrderProductById(req: Request, res: Response) {
        try {
            const id_order = parseInt(req.params["id_order"]);
            const id_product = parseInt(req.params["id_product"]);
            const orderProducts =
                await new OrderProductRepo().getOrderProductById(
                    id_order,
                    id_product,
                );

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched order products by order id!",
                data: orderProducts,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getOrderProductByOrderId(req: Request, res: Response) {
        try {
            const id_order = parseInt(req.params["orderId"]);
            const orderProducts =
                await new OrderProductRepo().getOrderProductByOrderId(id_order);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched order products by order id!",
                data: orderProducts,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getAllOrderProduct(req: Request, res: Response) {
        try {
            const orderProducts =
                await new OrderProductRepo().getAllOrderProduct();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all order product data!",
                data: orderProducts,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateOrderProduct(req: Request, res: Response) {
        try {
            const id_order = parseInt(req.params["id_order"]);
            const id_product = parseInt(req.params["id_product"]);

            const updatedOrderProduct = new OrderProduct();
            updatedOrderProduct.id_order = id_order;
            updatedOrderProduct.id_product = id_product;
            updatedOrderProduct.num_product = req.body.num_product;

            await new OrderProductRepo().updateOrderProduct(
                updatedOrderProduct,
            );

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated order product data!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new OrderProductController();
