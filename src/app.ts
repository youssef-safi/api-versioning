import express from "express";
import { setupSwaggerAndOpenApi } from "./shared/openapi/swagger.js";
import { errorHandler } from "./middlwares/error-handler.middleware.js";
import { Config } from "./config.js";
import { apiRouter } from "./router.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import { pinoHttp } from "pino-http";

const app = express();

app.use(pinoHttp());

app.use(cookieParser());

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use(
  session({
    name: Config.SESSION.NAME,
    secret: Config.SESSION.SECRET,
    resave: Config.SESSION.RESAVE,
    saveUninitialized: Config.SESSION.SAVE_UNINITIALIZED,
    cookie: {
      secure: Config.SESSION.COOKIE.SECURE,
      httpOnly: Config.SESSION.COOKIE.HTTP_ONLY,
      maxAge: Config.SESSION.COOKIE.MaxAGE,
    },
  }),
);

app.use(Config.API.PREFIX, apiRouter);

setupSwaggerAndOpenApi(app);

app.use(errorHandler);

export { app };
