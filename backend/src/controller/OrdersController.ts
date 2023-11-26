// controller/OrdersController.ts
import { Request, Response } from "express";
import { Orders } from "../model/Orders";
import OrdersRepo from "../repository/OrdersRepo";

class OrdersController {
    async createOrder(req: Request, res: Response) {
        try {
            const new_order = new Orders();
            new_order.id = req.body.id;
            if (new_order.id == null || new_order.id == undefined) {
                await new OrdersRepo().getMaxId().then((value: number) => {
                    new_order.id = value + 1;
                });
            }

            new_order.id_table = req.body.id_table;
            new_order.id_tenant = req.body.id_tenant;
            new_order.status = req.body.status;
            new_order.time = req.body.time;

            await new OrdersRepo().createOrder(new_order);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created order!",
            });
        } catch (err: any) {
            console.log(err.message);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteOrder(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            await new OrdersRepo().deleteOrder(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted order!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getOrderById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_order = await new OrdersRepo().getOrderById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched order by id!",
                data: new_order,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getAllOrders(req: Request, res: Response) {
        try {
            console.log("masuk getAllOrders COntroller");
            const new_order = await new OrdersRepo().getAllOrders();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all order data!",
                data: new_order,
            });
        } catch (err: any) {
            console.log(err.message);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateOrder(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const new_order = new Orders();

            new_order.id = id;
            new_order.id_table = req.body.id_table;
            new_order.id_tenant = req.body.id_tenant;
            new_order.status = req.body.status;
            new_order.time = req.body.time;

            await new OrdersRepo().updateOrder(new_order);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated order data!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new OrdersController();
