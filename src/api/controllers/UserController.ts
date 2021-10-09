import { Request, Response, response } from "express";

import { User } from "../../core/models/User";
import { getRepository } from "typeorm";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getRepository(User);

    const userAlreadyExists = usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return res.status(400).json({
        error: "User already exists!",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return res.json(user);
  }
}

export default new UserController();
