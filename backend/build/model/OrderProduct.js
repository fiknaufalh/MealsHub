"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProduct = void 0;
/* eslint-disable indent */
const sequelize_typescript_1 = require("sequelize-typescript");
const Orders_1 = require("./Orders");
const Products_1 = require("./Products");
let OrderProduct = class OrderProduct extends sequelize_typescript_1.Model {
};
exports.OrderProduct = OrderProduct;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Orders_1.Orders),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id_order",
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "id_order", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_1.Products),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id_product",
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "id_product", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "num_product",
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "num_product", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Orders_1.Orders, "id_order"),
    __metadata("design:type", Orders_1.Orders)
], OrderProduct.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Products_1.Products, "id_product"),
    __metadata("design:type", Products_1.Products)
], OrderProduct.prototype, "product", void 0);
exports.OrderProduct = OrderProduct = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "order_product",
    })
], OrderProduct);
