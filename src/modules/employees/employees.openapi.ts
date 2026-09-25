import { openApiRegistry } from "#/shared/openapi/openapi.js";
import {
  CreateEmployeeRequestSchema,
  EmployeeSchema,
  EmployeesParamsSchema,
  EmployeesQuerySchema,
  UpdateEmployeeRequestSchema,
} from "./employees.schemas.js";

openApiRegistry.registerPath({
  method: "post",
  path: "/api/employees",
  tags: ["Employees"],
  operationId: "createEmployee",
  summary: "Create an employee",
  request: {
    body: {
      content: {
        "application/json": { schema: CreateEmployeeRequestSchema },
      },
    },
  },
  responses: {
    201: {
      description: "Employee created",
      content: { "application/json": { schema: EmployeeSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "patch",
  path: "/api/employees/{id}",
  tags: ["Employees"],
  operationId: "updateEmployee",
  summary: "Update an employee",
  request: {
    params: EmployeesParamsSchema,
    body: {
      content: {
        "application/json": { schema: UpdateEmployeeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: "Employee updated",
      content: { "application/json": { schema: EmployeeSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "delete",
  path: "/api/employees/{id}",
  tags: ["Employees"],
  operationId: "deleteEmployee",
  summary: "Delete an employee",
  request: { params: EmployeesParamsSchema },
  responses: {
    204: { description: "Employee deleted" },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/employees/{id}",
  tags: ["Employees"],
  operationId: "getEmployeeById",
  summary: "Get an employee",
  request: { params: EmployeesParamsSchema },
  responses: {
    200: {
      description: "Employee retrieved",
      content: { "application/json": { schema: EmployeeSchema } },
    },
  },
});

openApiRegistry.registerPath({
  method: "get",
  path: "/api/employees",
  tags: ["Employees"],
  operationId: "getEmployees",
  summary: "List employees",
  request: { query: EmployeesQuerySchema },
  responses: {
    200: {
      description: "Employees retrieved",
      content: {
        "application/json": { schema: EmployeeSchema.array() },
      },
    },
  },
});
