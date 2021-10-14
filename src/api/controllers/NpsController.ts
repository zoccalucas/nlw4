import { IsNull, Not, getCustomRepository } from "typeorm";
import { Request, Response } from "express";

import { AppError } from "../../core/errors/appError";
import { SurveysRepository } from "../../core/repositories/SurveysRepository";
import { SurveysUsersRepository } from "../../core/repositories/SurveysUsersRepository";

class NpsController {
  async execute(req: Request, res: Response) {
    const { survey_id } = req.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const survey = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!survey) {
      throw new AppError("Survey does not exists!");
    }

    if (!surveysUsers) {
      throw new AppError("Survey User does not exists!");
    }

    const detractor = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length;

    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10
    ).length;
    const passives = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number(
      (((promoters - detractor) / totalAnswers) * 100).toFixed(2)
    );

    return res.json({
      detractor,
      promoters,
      passives,
      totalAnswers,
      nps: calculate,
    });
  }
}

export default new NpsController();
