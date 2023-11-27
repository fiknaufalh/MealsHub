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
// TenantRepo.ts
/* eslint-disable no-unused-vars */
const Tenants_1 = require("../model/Tenants");
class TenantRepo {
    getAllTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Tenants_1.Tenants.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching tenants: ${error.message}`);
            }
        });
    }
    getTenantById(tenantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tenant = yield Tenants_1.Tenants.findOne({ where: { id: tenantId } });
                if (!tenant) {
                    throw new Error(`Tenant with id ${tenantId} not found`);
                }
                return tenant;
            }
            catch (error) {
                throw new Error(`Error while fetching tenant: ${error.message}`);
            }
        });
    }
    createTenant(tenant) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Tenants_1.Tenants.create({
                    id: tenant.id,
                    name: tenant.name,
                    close_hour: tenant.close_hour,
                    open_hour: tenant.open_hour,
                    description: tenant.description,
                    rating: tenant.rating,
                    image: tenant.image,
                });
            }
            catch (error) {
                throw new Error(`Error while creating tenant: ${error.message}`);
            }
        });
    }
    updateTenant(tenant) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingTenant = yield Tenants_1.Tenants.findOne({
                    where: { id: tenant.id },
                });
                if (!existingTenant) {
                    throw new Error(`Tenant with id ${tenant.id} not found`);
                }
                existingTenant.name = tenant.name;
                existingTenant.close_hour = tenant.close_hour;
                existingTenant.open_hour = tenant.open_hour;
                existingTenant.description = tenant.description;
                existingTenant.rating = tenant.rating;
                existingTenant.image = tenant.image;
                yield existingTenant.save();
            }
            catch (error) {
                throw new Error(`Error while updating tenant: ${error.message}`);
            }
        });
    }
    deleteTenant(tenantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tenant = yield Tenants_1.Tenants.findOne({ where: { id: tenantId } });
                if (!tenant) {
                    throw new Error(`Tenant with id ${tenantId} not found`);
                }
                yield tenant.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting tenant: ${error.message}`);
            }
        });
    }
}
exports.default = TenantRepo;
