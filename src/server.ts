import "dotenv/config";
import { app } from "./app.js";
import { Config } from "./config.js";

const PORT = Config.API.PORT;

app.listen(PORT, () => {
  console.log(`server is listening on ${Config.API.URL}`);
});
