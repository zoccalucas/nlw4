import SurveysController from "./controllers/SurveysController";
import UserController from "./controllers/UserController";
import express from "express";
import indexController from "./controllers/IndexController";

const router = express.Router();

router.get("/", indexController.index);

router.route("/users").post(UserController.create);

router
  .route("/surveys")
  .get(SurveysController.show)
  .post(SurveysController.create);

export default router;
