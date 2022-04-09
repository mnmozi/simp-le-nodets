import { asFunction, AwilixContainer, asClass, asValue } from "awilix";
import { DataSource } from "typeorm";
import * as Repository from "../repositories/index.js";
import logger from "../util/winston.js";

interface Services {
  [key: string]: any;
}
const dependencyService: Services = Repository;
export default async (
  container: AwilixContainer<any>,
  dataSource: DataSource
) => {
  logger.debug("Loading the Repositories...");
  const entities = [];
  for (const key in Repository) {
    logger.debug(key);
    const loadedService = dependencyService[key];
    try {
      container.register({
        [key]: asValue(loadedService(dataSource)),
      });
      //   container.("db_entities", asValue(loadedService));
      entities.push(loadedService);
    } catch (err) {
      logger.error(err);
    }
  }
  container.register("db_entities", asValue(entities));
  logger.debug("Done with Loading the Repositories!");
};
