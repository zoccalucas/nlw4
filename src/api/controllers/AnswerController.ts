import { Request, Response } from "express";

import { AppError } from "../../core/errors/appError";
import { SurveysUsersRepository } from "../../core/repositories/SurveysUsersRepository";
import { getCustomRepository } from "typeorm";

class AnswerController {
  async execute(req: Request, res: Response) {
    const { value } = req.params;
    const { u } = req.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("Survey User does not exists!");
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return res.json(surveyUser);
  }
}

export default new AnswerController();
