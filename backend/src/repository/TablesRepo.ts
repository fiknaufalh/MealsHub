/* eslint-disable no-unused-vars */
import { Tables } from "../model/Tables";

interface ITablesRepo {
    getAllTables(): Promise<Tables[]>;
    getTableById(tableId: number): Promise<Tables>;
    createTable(table: Tables): Promise<void>;
    updateTable(table: Tables): Promise<void>;
    deleteTable(tableId: number): Promise<void>;
}

export default class TablesRepo implements ITablesRepo {
    async getAllTables(): Promise<Tables[]> {
        try {
            console.log("masuk getTables");
            return await Tables.findAll();
        } catch (error: any) {
            throw new Error(`Error while fetching tables: ${error.message}`);
        }
    }

    async getTableById(tableId: number): Promise<Tables> {
        try {
            const new_table = await Tables.findOne({ where: { id: tableId } });
            if (!new_table) {
                throw new Error(`Table with id ${tableId} not found`);
            }
            return new_table;
        } catch (error: any) {
            throw new Error(`Error while fetching table: ${error.message}`);
        }
    }

    async createTable(table: Tables): Promise<void> {
        try {
            console.log("masuk createTable");
            // const new_table = await new Tables();
            // new_table.id = table.id;
            // new_table.status = table.status;
            // new_table.num_seat = table.num_seat;

            await Tables.create({
                id: table.id,
                status: table.status,
                num_seat: table.num_seat,
            });
        } catch (error: any) {
            throw new Error(`Error while creating table: ${error.message}`);
        }
    }

    async updateTable(table: Tables): Promise<void> {
        try {
            const new_table = await Tables.findOne({ where: { id: table.id } });
            if (!new_table) {
                throw new Error(`Table with id ${table.id} not found`);
            }
            new_table.status = table.status;
            new_table.num_seat = table.num_seat;
            await new_table.save();
        } catch (error: any) {
            throw new Error(`Error while updating table: ${error.message}`);
        }
    }

    async deleteTable(tableId: number): Promise<void> {
        try {
            const new_table = await Tables.findOne({ where: { id: tableId } });
            if (!new_table) {
                throw new Error(`Table with id ${tableId} not found`);
            }
            await new_table.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting table: ${error.message}`);
        }
    }
}
