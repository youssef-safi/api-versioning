import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import { Config } from "#/config.js";

export const openApiRegistry = new OpenAPIRegistry();

export function generateOpenApiDocument() {
  const openApiGenerator = new OpenApiGeneratorV3(openApiRegistry.definitions);

  return openApiGenerator.generateDocument({
    openapi: "3.1.0",
    info: {
      title: "HR PORTAL Management REST API",
      version: "1.0.0",
    },
    servers: [
      {
        url: Config.API.URL,
        description: "Development",
      },
    ],
    tags: [
      {
        name: "Employees",
        description: "Employees management operations",
      },
      {
        name: "Departments",
        description: "Departments management operations",
      },
    ],
  });
}
