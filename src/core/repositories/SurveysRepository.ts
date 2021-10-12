import { EntityRepository, Repository } from "typeorm";

import { Survey } from "../../core/models/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
