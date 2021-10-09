import express from "express";
import indexController from "./controllers/IndexController";

const router = express.Router();

router.get("/", indexController.index);

router.get("/users", (request, response) => {
  return response.json({ Message: "Rota OK!" });
});

export default router;
