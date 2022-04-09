import { EntityManager, Repository } from "typeorm";
import { admFlowModel } from "../models/index.js";
import logger from "../util/winston.js";

type admFlowConstructorProps = {
  manager: EntityManager;
  admFlowRepository: Repository<admFlowModel>;
};
export default class ResourceService {
  private manager: EntityManager;
  private admFlowRepository: Repository<admFlowModel>;
  constructor({ manager, admFlowRepository }: admFlowConstructorProps) {
    this.manager = manager;
    this.admFlowRepository = admFlowRepository;
  }

  async testService() {
    return await this.admFlowRepository.find();
  }
}
