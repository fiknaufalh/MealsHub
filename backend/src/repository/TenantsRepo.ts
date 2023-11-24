// TenantRepo.ts
/* eslint-disable no-unused-vars */
import { Tenants } from "../model/Tenants";

interface ITenantRepo {
    getAllTenants(): Promise<Tenants[]>;
    getTenantById(tenantId: number): Promise<Tenants>;
    createTenant(tenant: Tenants): Promise<void>;
    updateTenant(tenant: Tenants): Promise<void>;
    deleteTenant(tenantId: number): Promise<void>;
}

export default class TenantRepo implements ITenantRepo {
    async getAllTenants(): Promise<Tenants[]> {
        try {
            return await Tenants.findAll();
        } catch (error: any) {
            throw new Error(`Error while fetching tenants: ${error.message}`);
        }
    }

    async getTenantById(tenantId: number): Promise<Tenants> {
        try {
            const tenant = await Tenants.findOne({ where: { id: tenantId } });
            if (!tenant) {
                throw new Error(`Tenant with id ${tenantId} not found`);
            }
            return tenant;
        } catch (error: any) {
            throw new Error(`Error while fetching tenant: ${error.message}`);
        }
    }

    async createTenant(tenant: Tenants): Promise<void> {
        try {
            await Tenants.create({
                id: tenant.id,
                name: tenant.name,
                close_hour: tenant.close_hour,
                open_hour: tenant.open_hour,
                description: tenant.description,
                rating: tenant.rating,
            });
        } catch (error: any) {
            throw new Error(`Error while creating tenant: ${error.message}`);
        }
    }

    async updateTenant(tenant: Tenants): Promise<void> {
        try {
            const existingTenant = await Tenants.findOne({
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

            await existingTenant.save();
        } catch (error: any) {
            throw new Error(`Error while updating tenant: ${error.message}`);
        }
    }

    async deleteTenant(tenantId: number): Promise<void> {
        try {
            const tenant = await Tenants.findOne({ where: { id: tenantId } });
            if (!tenant) {
                throw new Error(`Tenant with id ${tenantId} not found`);
            }

            await tenant.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting tenant: ${error.message}`);
        }
    }
}
