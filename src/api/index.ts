import { NODE_PORT } from "../config";
import { app } from "./app";

app.listen(NODE_PORT, () => {
  console.log(`Server running at http://localhost:${NODE_PORT} 🚀`);
});
