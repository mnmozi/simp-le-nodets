import { asFunction, AwilixContainer, asClass, asValue } from "awilix";
import * as models from "../models/index.js";
import logger from "../util/winston.js";

interface Services {
  [key: string]: any;
}
const dependencyService: Services = models;
export default async (container: AwilixContainer<any>) => {
  logger.debug("Loading the models...");
  const entities = [];
  for (const key in models) {
    logger.debug(key);
    const loadedService = dependencyService[key];
    try {
      container.register({
        [key]: asClass(loadedService),
      });
      //   container.("db_entities", asValue(loadedService));
      entities.push(loadedService);
    } catch (err) {
      console.log(err);
    }
  }
  container.register("db_entities", asValue(entities));
  logger.debug("Done with Loading the models!");
};
