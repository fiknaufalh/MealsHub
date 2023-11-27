import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UNAUTHORIZED } from "../constant/httpStatus";

interface decodedToken extends Request {
    user?: string;
    iat: number;
    exp: number;
}

export default (req: decodedToken, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers.access_token as
        | string
        | undefined;

    if (!token) {
        return res.status(UNAUTHORIZED).send();
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
    } catch (error) {
        return res.status(UNAUTHORIZED).send();
    }

    return next();
};
