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
const Tenants_1 = require("../model/Tenants");
const TenantsRepo_1 = __importDefault(require("../repository/TenantsRepo"));
class TenantController {
    createTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_tenant = new Tenants_1.Tenants();
                new_tenant.id = req.body.id;
                new_tenant.name = req.body.name;
                new_tenant.close_hour = req.body.close_hour;
                new_tenant.open_hour = req.body.open_hour;
                new_tenant.description = req.body.description;
                new_tenant.rating = req.body.rating;
                new_tenant.image = req.body.image;
                yield new TenantsRepo_1.default().createTenant(new_tenant);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created tenant!",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deleteTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new TenantsRepo_1.default().deleteTenant(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted tenant!",
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
    getTenantById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const tenant = yield new TenantsRepo_1.default().getTenantById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched tenant by id!",
                    data: tenant,
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
    getAllTenants(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tenants = yield new TenantsRepo_1.default().getAllTenants();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all tenant data!",
                    data: tenants,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updateTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const tenant = new Tenants_1.Tenants();
                tenant.id = id;
                tenant.name = req.body.name;
                tenant.close_hour = req.body.close_hour;
                tenant.open_hour = req.body.open_hour;
                tenant.description = req.body.description;
                tenant.rating = req.body.rating;
                tenant.image = req.body.image;
                yield new TenantsRepo_1.default().updateTenant(tenant);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated tenant data!",
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
exports.default = new TenantController();
