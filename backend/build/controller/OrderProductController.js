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
const OrderProduct_1 = require("../model/OrderProduct");
const OrderProductRepo_1 = __importDefault(require("../repository/OrderProductRepo"));
class OrderProductController {
    createOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOrderProduct = yield new OrderProduct_1.OrderProduct();
                newOrderProduct.id_order = req.body.id_order;
                newOrderProduct.id_product = req.body.id_product;
                newOrderProduct.num_product = req.body.num_product;
                yield new OrderProductRepo_1.default().createOrderProduct(newOrderProduct);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created order product!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deleteOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_order = parseInt(req.params["id_order"]);
                const id_product = parseInt(req.params["id_product"]);
                yield new OrderProductRepo_1.default().deleteOrderProduct(id_order, id_product);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted order product!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getOrderProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_order = parseInt(req.params["id_order"]);
                const id_product = parseInt(req.params["id_product"]);
                const orderProducts = yield new OrderProductRepo_1.default().getOrderProductById(id_order, id_product);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched order products by order id!",
                    data: orderProducts,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getAllOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderProducts = yield new OrderProductRepo_1.default().getAllOrderProduct();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all order product data!",
                    data: orderProducts,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updateOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_order = parseInt(req.params["id_order"]);
                const id_product = parseInt(req.params["id_product"]);
                const updatedOrderProduct = new OrderProduct_1.OrderProduct();
                updatedOrderProduct.id_order = id_order;
                updatedOrderProduct.id_product = id_product;
                updatedOrderProduct.num_product = req.body.num_product;
                yield new OrderProductRepo_1.default().updateOrderProduct(updatedOrderProduct);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated order product data!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new OrderProductController();
