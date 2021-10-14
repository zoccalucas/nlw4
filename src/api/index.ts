import { API_PORT } from "../config";
import { app } from "./app";

app.listen(API_PORT, () => {
  console.log(`Server running at http://localhost:${API_PORT} 🚀`);
});
