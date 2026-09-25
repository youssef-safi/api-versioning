import { openApiRegistry } from "#/shared/openapi/openapi.js";
import {
  CreateDepartmentRequestSchema,
  DepartmentSchema,
  DepartmentsParamsSchema,
  DepartmentsQuerySchema,
  UpdateDepartmentRequestSchema,
} from "./departments.schemas.js";

openApiRegistry.registerPath({
  method: "post",
  path: "/api/departments",
  tags: ["Departments"],
  operationId: "createDepartment",
  summary: "Create a department",
  request: {
    body: {
      content: {
        "application/json": { schema: CreateDepartmentRequestSchema },
      },
    },
  },
  responses: {
    201: {
      description: "Department created",
      content: { "application/json": { schema: DepartmentSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "patch",
  path: "/api/departments/{id}",
  tags: ["Departments"],
  operationId: "updateDepartment",
  summary: "Update a department",
  request: {
    params: DepartmentsParamsSchema,
    body: {
      content: {
        "application/json": { schema: UpdateDepartmentRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: "Department updated",
      content: { "application/json": { schema: DepartmentSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "delete",
  path: "/api/departments/{id}",
  tags: ["Departments"],
  operationId: "deleteDepartment",
  summary: "Delete a department",
  request: { params: DepartmentsParamsSchema },
  responses: {
    204: { description: "Department deleted" },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/departments/{id}",
  tags: ["Departments"],
  operationId: "getDepartmentById",
  summary: "Get a department",
  request: { params: DepartmentsParamsSchema },
  responses: {
    200: {
      description: "Department retrieved",
      content: { "application/json": { schema: DepartmentSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/departments",
  tags: ["Departments"],
  operationId: "getDepartments",
  summary: "List departments",
  request: { query: DepartmentsQuerySchema },
  responses: {
    200: {
      description: "Departments retrieved",
      content: {
        "application/json": { schema: DepartmentSchema.array() },
      },
    },
  },
});
