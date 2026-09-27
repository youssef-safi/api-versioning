export const Config = {
  API: {
    PORT: Number(process.env.PORT ?? 3000),
    URL: "http://localhost:3000",
    PREFIX: "/api",
  },
  SESSION: {
    SECRET: "ezadzaio9023@d(-diud",
    NAME: "sessionId",
    RESAVE: false,
    SAVE_UNINITIALIZED: false,
    COOKIE: {
      MaxAGE: 1000 * 60 * 60,
      SECURE: false,
      HTTP_ONLY: true,
    },
  },
  DATABASE: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
