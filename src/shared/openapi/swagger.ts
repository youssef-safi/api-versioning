import swaggerUi from "swagger-ui-express";
import type { Express } from "express";
import { Config } from "#/config.js";
import { generateOpenApiDocument } from "./openapi.js";

import "#/modules/employees/employees.openapi.js";
import "#/modules/departments/departments.openapi.js";
import "#/modules/tasks/tasks.openapi.js";

export function setupSwaggerAndOpenApi(app: Express) {
  const document = generateOpenApiDocument();

  app.use(
    `${Config.API.PREFIX}/swagger`,
    swaggerUi.serve,
    swaggerUi.setup(document),
  );

  app.get(`${Config.API.PREFIX}/openapi.json`, (req, res) => {
    return res.status(200).json(document);
  });
}
