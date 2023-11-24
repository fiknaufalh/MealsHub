/* eslint-disable indent */
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate =
    (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("masuk sini 1");
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            console.log("masuk sini 2");
            return next();
        } catch (err: any) {
            const error_message = JSON.parse(err.message);
            console.log("masuk sini 3");
            return res.status(400).json({
                status: "Bad Request!",
                message: error_message[0].message,
            });
        }
    };

export default validate;
