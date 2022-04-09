import { NextFunction, Request, Response } from "express";

import { AwilixContainer } from "awilix";
import { Router } from "express";
import { AdmFlowService } from "../../../services/index.js";
import logger from "../../../util/winston.js";

const route = Router();

export default (app: Router, container: AwilixContainer) => {
  app.use("/user", route);

  route.get("*", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const admFlowService: AdmFlowService = await res.locals.scope.resolve(
        "admFlowService"
      );

      const result = await admFlowService.testService();
      res.status(200).json(result);
    } catch (err) {
      logger.error(err);
    }
  });
};
