import { Router } from "express";
import logger from "../../../util/winston.js";

const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  route.get("/", (req, res, next) => {
    logger.info("hello");
    res.status(200).json("Hello user");
  });
};
