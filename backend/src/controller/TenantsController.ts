// controller/TenantController.ts
import { Request, Response } from "express";
import { Tenants } from "../model/Tenants";
import TenantsRepo from "../repository/TenantsRepo";

class TenantController {
    async createTenant(req: Request, res: Response) {
        try {
            const new_tenant = new Tenants();
            new_tenant.id = req.body.id;
            new_tenant.name = req.body.name;
            new_tenant.close_hour = req.body.close_hour;
            new_tenant.open_hour = req.body.open_hour;
            new_tenant.description = req.body.description;
            new_tenant.rating = req.body.rating;

            await new TenantsRepo().createTenant(new_tenant);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created tenant!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteTenant(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            await new TenantsRepo().deleteTenant(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted tenant!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getTenantById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const tenant = await new TenantsRepo().getTenantById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched tenant by id!",
                data: tenant,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getAllTenants(req: Request, res: Response) {
        try {
            const tenants = await new TenantsRepo().getAllTenants();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all tenant data!",
                data: tenants,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateTenant(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const tenant = new Tenants();

            tenant.id = id;
            tenant.name = req.body.name;
            tenant.close_hour = req.body.close_hour;
            tenant.open_hour = req.body.open_hour;
            tenant.description = req.body.description;
            tenant.rating = req.body.rating;

            await new TenantsRepo().updateTenant(tenant);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated tenant data!",
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new TenantController();
