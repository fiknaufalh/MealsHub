import BaseRoutes from "./base/BaseRouter";
import TablesController from "../controller/TablesController";
import validate from "../helper/validate";
import { createTableSchema, updateTableSchema } from "../schema/TablesSchema";

class TablesRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post(
            "",
            validate(createTableSchema),
            TablesController.createTable,
        );
        this.router.patch(
            "/:id",
            validate(updateTableSchema),
            TablesController.updateTable,
        );
        this.router.delete("/:id", TablesController.deleteTable);
        this.router.get("", TablesController.getAllTables);
        this.router.get("/:id", TablesController.getTableById);
    }
}

export default new TablesRoutes().router;
