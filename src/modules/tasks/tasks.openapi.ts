import { openApiRegistry } from "#/shared/openapi/openapi.js";
import {
  CreateTaskRequestSchema,
  TaskArraySchema,
  TaskParamsSchema,
  TaskQuerySchema,
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
  path: "/api/tasks/{id}",
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

openApiRegistry.registerPath({
  method: "delete",
  path: "/api/tasks/{id}",
  summary: "Delete a task",
  operationId: "deleteTask",
  tags: ["Tasks"],
  request: {
    params: TaskParamsSchema,
  },
  responses: {
    204: {
      description: "Task deleted",
    },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/tasks/{id}",
  summary: "Get task by id",
  operationId: "getTaskById",
  tags: ["Tasks"],
  request: {
    params: TaskParamsSchema,
  },
  responses: {
    200: {
      description: "Task",
      content: {
        "application/json": {
          schema: TaskSchema,
        },
      },
    },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/tasks",
  summary: "Get tasks",
  operationId: "getTasks",
  tags: ["Tasks"],
  request: {
    query: TaskQuerySchema,
  },
  responses: {
    200: {
      description: "Get tasks",
      content: {
        "application/json": {
          schema: TaskArraySchema,
        },
      },
    },
  },
});
