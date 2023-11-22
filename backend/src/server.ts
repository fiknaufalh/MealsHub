import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
    }),
);

app.use("/api/foods", foodRouter); // still as placeholder

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
