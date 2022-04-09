// import { AwilixContainer } from "awilix";
import { AwilixContainer } from "awilix/lib/container";
import { Router } from "express";
import { NextFunction, Request, Response } from "express";

import AppError from "../util/appError.js";
import errorHandler from "./middleware/errorHandler.js";
import user from "./routes/user/index.js";

export default (container: AwilixContainer) => {
  const app = Router();
  user(app, container);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can't find ${req.url} on this server!`, 400));
  });
  app.use(errorHandler());
  return app;
};
