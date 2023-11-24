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
const TablesRepo_1 = __importDefault(require("../repository/TablesRepo"));
const Tables_1 = require("../model/Tables");
class TablesController {
    getAllTables(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tables = yield new TablesRepo_1.default().getAllTables();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all tables data!",
                    data: tables,
                });
            }
            catch (error) {
                console.log(`Erro bro: ${error}`);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getTableById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const table = yield new TablesRepo_1.default().getTableById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched table by id!",
                    data: table,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    createTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("masuk createTable");
                const newTable = new Tables_1.Tables();
                newTable.id = req.body.id;
                newTable.num_seat = req.body.num_seat;
                newTable.status = req.body.status;
                yield new TablesRepo_1.default().createTable(newTable);
                console.log("masuk createTable 2");
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created table!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updateTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const updatedTable = new Tables_1.Tables();
                updatedTable.id = id;
                updatedTable.num_seat = req.body.num_seat;
                updatedTable.status = req.body.status;
                yield new TablesRepo_1.default().updateTable(updatedTable);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated table data!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deleteTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new TablesRepo_1.default().deleteTable(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted table!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new TablesController();
