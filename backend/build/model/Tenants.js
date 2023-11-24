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
exports.Tenants = void 0;
/* eslint-disable indent */
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_1 = require("./Users");
const Orders_1 = require("./Orders");
let Tenants = class Tenants extends sequelize_typescript_1.Model {
};
exports.Tenants = Tenants;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id",
    }),
    __metadata("design:type", Number)
], Tenants.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        field: "name",
    }),
    __metadata("design:type", String)
], Tenants.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: "close_hour",
    }),
    __metadata("design:type", Object)
], Tenants.prototype, "close_hour", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: "open_hour",
    }),
    __metadata("design:type", Object)
], Tenants.prototype, "open_hour", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "description",
    }),
    __metadata("design:type", Object)
], Tenants.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        field: "rating",
    }),
    __metadata("design:type", Object)
], Tenants.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "image",
    }),
    __metadata("design:type", Object)
], Tenants.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_1.Users),
    (0, sequelize_typescript_1.BelongsTo)(() => Users_1.Users, "id"),
    __metadata("design:type", Users_1.Users)
], Tenants.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Orders_1.Orders, "id_tenant"),
    __metadata("design:type", Array)
], Tenants.prototype, "orders", void 0);
exports.Tenants = Tenants = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "tenants",
    })
], Tenants);
