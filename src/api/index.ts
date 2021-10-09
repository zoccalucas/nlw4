import { NODE_PORT } from "../config";
import apiRouter from "./routes";
import express from "express";

const app = express();

app.use(express.json());

app.use("/", apiRouter);

app.listen(NODE_PORT, () => {
  console.log(`Server running at http://localhost:${NODE_PORT} 🚀`);
});
