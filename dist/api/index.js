// import { AwilixContainer } from "awilix";
import { Router } from "express";
import AppError from "../util/appError.js";
import errorHandler from "./middleware/errorHandler.js";
import user from "./routes/user/index.js";
export default () => {
    const app = Router();
    user(app);
    app.all("*", (req, res, next) => {
        next(new AppError(`Can't find ${req.url} on this server!`, 400));
    });
    app.use(errorHandler());
    return app;
};
