import express from "express";
import "reflect-metadata";

import { asValue, createContainer } from "awilix";

import routes from "./api/index.js";
import config from "./config/index.js";
import loaders from "./loaders/index.js";
import logger from "./util/winston.js";
console.log("Hello People!");

export default async () => {
  const app = express();

  const container = await loaders();
  app.use(express.json());
  app.use((_, res, next) => {
    res.locals.scope = container.createScope();
    next();
  });
  app.use("/", routes(container));
  return app;
};
// const result = await dataSource();
