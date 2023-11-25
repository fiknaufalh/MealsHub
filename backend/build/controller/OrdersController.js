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
const Orders_1 = require("../model/Orders");
const OrdersRepo_1 = __importDefault(require("../repository/OrdersRepo"));
class OrdersController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_order = new Orders_1.Orders();
                new_order.id = req.body.id;
                new_order.id_table = req.body.id_table;
                new_order.id_tenant = req.body.id_tenant;
                new_order.status = req.body.status;
                new_order.time = req.body.time;
                yield new OrdersRepo_1.default().createOrder(new_order);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created order!",
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
    deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new OrdersRepo_1.default().deleteOrder(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted order!",
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
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const new_order = yield new OrdersRepo_1.default().getOrderById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched order by id!",
                    data: new_order,
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
    getAllOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("masuk getAllOrders COntroller");
                const new_order = yield new OrdersRepo_1.default().getAllOrders();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all order data!",
                    data: new_order,
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
    updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const new_order = new Orders_1.Orders();
                new_order.id = id;
                new_order.id_table = req.body.id_table;
                new_order.id_tenant = req.body.id_tenant;
                new_order.status = req.body.status;
                new_order.time = req.body.time;
                yield new OrdersRepo_1.default().updateOrder(new_order);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated order data!",
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
exports.default = new OrdersController();
