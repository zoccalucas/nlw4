import { Request, Response } from "express";

import { AppError } from "../../core/errors/appError";
import SendMailService from "../../core/services/SendMailService";
import { SurveysRepository } from "../../core/repositories/SurveysRepository";
import { SurveysUsersRepository } from "../../core/repositories/SurveysUsersRepository";
import { UserRepository } from "../../core/repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { resolve } from "path";

class SendMailController {
  async execute(req: Request, res: Response) {
    const { email, survey_id } = req.body;

    const usersRepository = getCustomRepository(UserRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new AppError("User does not exists");
    }

    const survey = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!survey) {
      throw new AppError("Survey does not exists!");
    }

    const npsPath = resolve(
      __dirname,
      "..",
      "..",
      "core",
      "views",
      "emails",
      "npsMail.hbs"
    );

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { user_id: user.id, value: null },
      relations: ["user", "survey"],
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: "",
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;
      await SendMailService.execute(email, survey.title, variables, npsPath);
      return res.json(surveyUserAlreadyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return res.json(surveyUser);
  }
}

export default new SendMailController();
