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
exports.Orders = void 0;
/* eslint-disable indent */
const sequelize_typescript_1 = require("sequelize-typescript");
const Tables_1 = require("./Tables");
const Tenants_1 = require("./Tenants");
const OrderProduct_1 = require("./OrderProduct");
let Orders = class Orders extends sequelize_typescript_1.Model {
};
exports.Orders = Orders;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id",
    }),
    __metadata("design:type", Number)
], Orders.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "status",
    }),
    __metadata("design:type", String)
], Orders.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: "time",
    }),
    __metadata("design:type", String)
], Orders.prototype, "time", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tables_1.Tables),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "id_table",
    }),
    __metadata("design:type", Number)
], Orders.prototype, "id_table", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tenants_1.Tenants),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "id_tenant",
    }),
    __metadata("design:type", Number)
], Orders.prototype, "id_tenant", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Tables_1.Tables, "id_table"),
    __metadata("design:type", Tables_1.Tables)
], Orders.prototype, "table", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Tenants_1.Tenants, "id_tenant"),
    __metadata("design:type", Tenants_1.Tenants)
], Orders.prototype, "tenant", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => OrderProduct_1.OrderProduct, "id_order"),
    __metadata("design:type", Array)
], Orders.prototype, "orderProducts", void 0);
exports.Orders = Orders = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "orders",
    })
], Orders);
