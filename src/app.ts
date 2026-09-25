import express from "express";
import { setupSwaggerAndOpenApi } from "./shared/openapi/swagger.js";
import { errorHandler } from "./middlwares/error-handler.middleware.js";
import { Config } from "./config.js";
import { apiRouter } from "./router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use(Config.API.PREFIX, apiRouter);

setupSwaggerAndOpenApi(app);

app.use(errorHandler);

export { app };
