import UserController from "./controllers/UserController"
import express from "express";
import indexController from "./controllers/IndexController";

const router = express.Router();

router.get("/", indexController.index);

router
  .route("/users")
  .post(UserController.create)

export default router;
