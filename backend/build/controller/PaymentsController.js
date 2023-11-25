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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payments_1 = require("../model/Payments");
const PaymentsRepo_1 = __importDefault(require("../repository/PaymentsRepo"));
class PaymentsController {
    createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_payment = new Payments_1.Payments();
                new_payment.id = req.body.id;
                new_payment.id_order = req.body.id_order;
                new_payment.status = req.body.status;
                yield new PaymentsRepo_1.default().createPayment(new_payment);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created payment!",
                });
            }
            catch (err) {
                console.log(err.message);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deletePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentId = parseInt(req.params.id);
                yield new PaymentsRepo_1.default().deletePayment(paymentId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted payment!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getPaymentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentId = parseInt(req.params.id);
                const payment = yield new PaymentsRepo_1.default().getPaymentById(paymentId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched payment by id!",
                    data: payment,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getAllPayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield new PaymentsRepo_1.default().getAllPayments();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all payment data!",
                    data: payments,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updatePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentId = parseInt(req.params.id);
                const updatedPayment = new Payments_1.Payments();
                updatedPayment.id = paymentId;
                updatedPayment.id_order = req.body.id_order;
                updatedPayment.status = req.body.status;
                yield new PaymentsRepo_1.default().updatePayment(updatedPayment);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated payment data!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new PaymentsController();
