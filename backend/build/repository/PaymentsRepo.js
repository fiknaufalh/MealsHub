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
// # PaymentsRepo.ts
/* eslint-disable no-unused-vars */
const Payments_1 = require("../model/Payments");
class PaymentsRepo {
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payments_1.Payments.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching payments: ${error.message}`);
            }
        });
    }
    getPaymentById(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payments_1.Payments.findOne({
                    where: { id: paymentId },
                });
                if (!payment) {
                    throw new Error(`Payment with id ${paymentId} not found`);
                }
                return payment;
            }
            catch (error) {
                throw new Error(`Error while fetching payment: ${error.message}`);
            }
        });
    }
    createPayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Payments_1.Payments.create({
                    id: payment.id,
                    id_order: payment.id_order,
                    status: payment.status,
                });
            }
            catch (error) {
                throw new Error(`Error while creating payment: ${error.message}`);
            }
        });
    }
    updatePayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingPayment = yield Payments_1.Payments.findOne({
                    where: { id: payment.id },
                });
                if (!existingPayment) {
                    throw new Error(`Payment with id ${payment.id} not found`);
                }
                existingPayment.id_order = payment.id_order;
                existingPayment.status = payment.status;
                yield existingPayment.save();
            }
            catch (error) {
                throw new Error(`Error while updating payment: ${error.message}`);
            }
        });
    }
    deletePayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payments_1.Payments.findOne({
                    where: { id: paymentId },
                });
                if (!payment) {
                    throw new Error(`Payment with id ${paymentId} not found`);
                }
                yield payment.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting payment: ${error.message}`);
            }
        });
    }
}
exports.default = PaymentsRepo;
