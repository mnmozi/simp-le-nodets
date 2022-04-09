import { asFunction, AwilixContainer } from "awilix";
import * as servicesClasses from "../services/index.js";
import logger from "../util/winston.js";

interface Services {
  [key: string]: any;
}
const dependencyService: Services = servicesClasses;
export default async (container: AwilixContainer<any>) => {
  logger.debug("Loading the services...");
  for (const key in servicesClasses) {
    const loadedService = dependencyService[key];
    try {
      logger.debug("loading " + key + "!");
      container.register({
        [key]: asFunction((cradle) => new loadedService(cradle)).singleton(),
      });
    } catch (err) {
      console.log(err);
    }
  }
  logger.debug("Done loading services!!");
};
