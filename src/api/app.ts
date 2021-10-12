import "reflect-metadata";
import createConnection from "../core/database";

import apiRouter from "./routes";
import express from "express";

createConnection();
const app = express();

app.use(express.json());
app.use("/", apiRouter);

export { app };