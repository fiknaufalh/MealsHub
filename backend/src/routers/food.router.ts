import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello from food router!");
});

router.get("/tags", (req, res) => {
    res.send("Hello from food router tags!");
});

export default router;
