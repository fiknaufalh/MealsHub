// # PaymentsRepo.ts
/* eslint-disable no-unused-vars */
import { Payments } from "../model/Payments";

interface IPaymentsRepo {
    getAllPayments(): Promise<Payments[]>;
    getPaymentById(paymentId: number): Promise<Payments>;
    createPayment(payment: Payments): Promise<void>;
    updatePayment(payment: Payments): Promise<void>;
    deletePayment(paymentId: number): Promise<void>;
}

export default class PaymentsRepo implements IPaymentsRepo {
    async getAllPayments(): Promise<Payments[]> {
        try {
            return await Payments.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error: any) {
            throw new Error(`Error while fetching payments: ${error.message}`);
        }
    }

    async getPaymentById(paymentId: number): Promise<Payments> {
        try {
            const payment = await Payments.findOne({
                where: { id: paymentId },
            });
            if (!payment) {
                throw new Error(`Payment with id ${paymentId} not found`);
            }
            return payment;
        } catch (error: any) {
            throw new Error(`Error while fetching payment: ${error.message}`);
        }
    }

    async getMaxId(): Promise<number> {
        try {
            const maxId = await Payments.max("id");
            if (maxId != null && typeof maxId === "number") {
                return maxId;
            }
            return 0;
        } catch (error: any) {
            throw new Error(`Error while fetching max id: ${error.message}`);
        }
    }

    async createPayment(payment: Payments): Promise<void> {
        try {
            await Payments.create({
                id: payment.id,
                id_order: payment.id_order,
                status: payment.status,
            });
        } catch (error: any) {
            throw new Error(`Error while creating payment: ${error.message}`);
        }
    }

    async updatePayment(payment: Payments): Promise<void> {
        try {
            const existingPayment = await Payments.findOne({
                where: { id: payment.id },
            });
            if (!existingPayment) {
                throw new Error(`Payment with id ${payment.id} not found`);
            }
            existingPayment.id_order = payment.id_order;
            existingPayment.status = payment.status;
            await existingPayment.save();
        } catch (error: any) {
            throw new Error(`Error while updating payment: ${error.message}`);
        }
    }

    async deletePayment(paymentId: number): Promise<void> {
        try {
            const payment = await Payments.findOne({
                where: { id: paymentId },
            });
            if (!payment) {
                throw new Error(`Payment with id ${paymentId} not found`);
            }
            await payment.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting payment: ${error.message}`);
        }
    }
}
