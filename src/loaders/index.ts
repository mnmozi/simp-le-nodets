import { asValue, createContainer } from "awilix";
import logger from "../util/winston.js";
import database from "./database.js";
import models from "./models.js";
import repositories from "./repositories.js";
import services from "./services.js";

export default async () => {
  const container = createContainer();
  await models(container);
  const dbConnection = await database(container);
  container.register({
    manager: asValue(dbConnection.manager),
  });

  await repositories(container, dbConnection);
  services(container);
  return container;
};
