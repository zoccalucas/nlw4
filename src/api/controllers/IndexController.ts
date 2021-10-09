import { NextFunction, Request, Response } from "express";

class IndexController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        name: "API NPS",
        version: "1.0",
        author: "Lucas Zocca",
      });
    } catch (e) {
      next(e);
    }
  }
}

export default new IndexController();
