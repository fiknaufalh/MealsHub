"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const TablesController_1 = __importDefault(require("../controller/TablesController"));
const validate_1 = __importDefault(require("../helper/validate"));
const TablesSchema_1 = require("../schema/TablesSchema");
class TablesRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(TablesSchema_1.createTableSchema), TablesController_1.default.createTable);
        this.router.patch("/:id", (0, validate_1.default)(TablesSchema_1.updateTableSchema), TablesController_1.default.updateTable);
        this.router.delete("/:id", TablesController_1.default.deleteTable);
        this.router.get("", TablesController_1.default.getAllTables);
        this.router.get("/:id", TablesController_1.default.getTableById);
    }
}
exports.default = new TablesRoutes().router;
