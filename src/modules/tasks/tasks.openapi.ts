import { openApiRegistry } from "#/shared/openapi/openapi.js";
import {
  CreateTaskRequestSchema,
  TaskParamsSchema,
  TaskSchema,
  UpdateTaskRequestSchema,
} from "./tasks.schemas.js";

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
      description: "Task created",
      content: {
        "application/json": {
          schema: TaskSchema,
        },
      },
    },
  },
});

openApiRegistry.registerPath({
  method: "patch",
  path: "/api/tasks/:id",
  tags: ["Tasks"],
  operationId: "Update Task",
  summary: "Update task",
  request: {
    params: TaskParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: UpdateTaskRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Task updated",
      content: {
        "application/json": {
          schema: TaskSchema,
        },
      },
    },
  },
});
