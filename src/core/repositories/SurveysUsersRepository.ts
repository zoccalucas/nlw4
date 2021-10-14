import { EntityRepository, Repository } from "typeorm";

import { SurveyUser } from "../../core/models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository };
