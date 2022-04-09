import { AwilixContainer } from "awilix";
import { DataSource } from "typeorm";
import { admFlowModel } from "../models/index.js";
import logger from "../util/winston.js";

export default async (container: AwilixContainer<any>) => {
  const entities = container.resolve("db_entities");
  const AppDataSource = new DataSource({
    type: "oracle",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "1540"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    serviceName: process.env.DB_SERVICE_NAME,
    entities: entities,
    synchronize: false,
    logging: true,
  });
  logger.debug("Trying to connect to oracledb with TypeORM...");
  const result = await AppDataSource.initialize();
  // here you can start to work with your database
  //   console.log(await result.getRepository(ADM_FLOW).find());
  //   console.log(result.getRepository(admFlowModel));

  logger.debug("now we connected to oracledb with TypeORM!!");
  return result;
};
