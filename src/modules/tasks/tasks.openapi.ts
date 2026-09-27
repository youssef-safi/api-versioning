import { openApiRegistry } from "#/shared/openapi/openapi.js";
import { CreateTaskRequestSchema, TaskSchema } from "./tasks.schemas.js";

openApiRegistry.registerPath({
  method: "post",
  path: "/api/tasks",
  tags: ["Tasks"],
  operationId: "createTask",
  summary: "Create task",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateTaskRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: TaskSchema,
          description: "Task created",
        },
      },
    },
  },
});
