import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";

import { AppError } from "../core/errors/appError";
import apiRouter from "./routes";
import createConnection from "../core/database";

createConnection();
const app = express();

app.use(express.json());
app.use("/", apiRouter);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal server error ${err.message}",
  });
});

export { app };
