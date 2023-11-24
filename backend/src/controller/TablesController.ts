import { Request, Response } from "express";
import TablesRepo from "../repository/TablesRepo";
import { Tables } from "../model/Tables";

class TablesController {
    async getAllTables(req: Request, res: Response) {
        try {
            const tables = await new TablesRepo().getTables();
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all tables data!",
                data: tables,
            });
        } catch (error) {
            console.log(`Erro bro: ${error}`);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getTableById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const table = await new TablesRepo().getTableById(id);
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched table by id!",
                data: table,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async createTable(req: Request, res: Response) {
        try {
            console.log("masuk createTable");
            const newTable = new Tables();
            newTable.id = req.body.id;
            newTable.num_seat = req.body.num_seat;
            newTable.status = req.body.status;

            await new TablesRepo().createTable(newTable);

            console.log("masuk createTable 2");
            res.status(201).json({
                status: "Created!",
                message: "Successfully created table!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateTable(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const updatedTable = new Tables();
            updatedTable.id = id;
            updatedTable.num_seat = req.body.num_seat;
            updatedTable.status = req.body.status;

            await new TablesRepo().updateTable(updatedTable);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated table data!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteTable(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            await new TablesRepo().deleteTable(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted table!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new TablesController();
