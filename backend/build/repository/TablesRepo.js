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
/* eslint-disable no-unused-vars */
const Tables_1 = require("../model/Tables");
class TablesRepo {
    getAllTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("masuk getTables");
                return yield Tables_1.Tables.findAll();
            }
            catch (error) {
                throw new Error(`Error while fetching tables: ${error.message}`);
            }
        });
    }
    getTableById(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_table = yield Tables_1.Tables.findOne({ where: { id: tableId } });
                if (!new_table) {
                    throw new Error(`Table with id ${tableId} not found`);
                }
                return new_table;
            }
            catch (error) {
                throw new Error(`Error while fetching table: ${error.message}`);
            }
        });
    }
    createTable(table) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("masuk createTable");
                // const new_table = await new Tables();
                // new_table.id = table.id;
                // new_table.status = table.status;
                // new_table.num_seat = table.num_seat;
                yield Tables_1.Tables.create({
                    id: table.id,
                    status: table.status,
                    num_seat: table.num_seat,
                });
            }
            catch (error) {
                throw new Error(`Error while creating table: ${error.message}`);
            }
        });
    }
    updateTable(table) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_table = yield Tables_1.Tables.findOne({ where: { id: table.id } });
                if (!new_table) {
                    throw new Error(`Table with id ${table.id} not found`);
                }
                new_table.status = table.status;
                new_table.num_seat = table.num_seat;
                yield new_table.save();
            }
            catch (error) {
                throw new Error(`Error while updating table: ${error.message}`);
            }
        });
    }
    deleteTable(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_table = yield Tables_1.Tables.findOne({ where: { id: tableId } });
                if (!new_table) {
                    throw new Error(`Table with id ${tableId} not found`);
                }
                yield new_table.destroy();
            }
            catch (error) {
                throw new Error(`Error while deleting table: ${error.message}`);
            }
        });
    }
}
exports.default = TablesRepo;
