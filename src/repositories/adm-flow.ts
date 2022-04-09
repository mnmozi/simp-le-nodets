import { DataSource } from "typeorm";
import { admFlowModel } from "../models/index.js";

export default (dataSource: DataSource) => {
  return dataSource.getRepository(admFlowModel).extend({});
};
