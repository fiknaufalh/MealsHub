import { Request, Response } from "express";
import { Payments } from "../model/Payments";
import PaymentsRepo from "../repository/PaymentsRepo";

class PaymentsController {
    async createPayment(req: Request, res: Response) {
        try {
            const new_payment = new Payments();
            new_payment.id = req.body.id;
            new_payment.id_order = req.body.id_order;
            new_payment.status = req.body.status;

            await new PaymentsRepo().createPayment(new_payment);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created payment!",
            });
        } catch (err: any) {
            console.log(err.message);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deletePayment(req: Request, res: Response) {
        try {
            const paymentId = parseInt(req.params.id);
            await new PaymentsRepo().deletePayment(paymentId);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted payment!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getPaymentById(req: Request, res: Response) {
        try {
            const paymentId = parseInt(req.params.id);
            const payment = await new PaymentsRepo().getPaymentById(paymentId);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched payment by id!",
                data: payment,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getAllPayments(req: Request, res: Response) {
        try {
            const payments = await new PaymentsRepo().getAllPayments();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all payment data!",
                data: payments,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updatePayment(req: Request, res: Response) {
        try {
            const paymentId = parseInt(req.params.id);
            const updatedPayment = new Payments();
            updatedPayment.id = paymentId;
            updatedPayment.id_order = req.body.id_order;
            updatedPayment.status = req.body.status;

            await new PaymentsRepo().updatePayment(updatedPayment);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated payment data!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new PaymentsController();
