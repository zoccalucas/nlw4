import AnswerController from "./controllers/AnswerController";
import SendMailController from "./controllers/SendMailController";
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

router
  .route("/send_mail")
  .post(SendMailController.execute);

router.get("/answers/:value", AnswerController.execute);
  
export default router;
