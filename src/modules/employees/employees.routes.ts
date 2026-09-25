import { Router } from "express";
import { validate } from "#/middlwares/validate.middleware.js";
import {
  CreateEmployeeRequestSchema,
  UpdateEmployeeRequestSchema,
  EmployeesParamsSchema,
  EmployeesQuerySchema,
} from "./employees.schemas.js";
import { employeesController } from "#/container.js";
import { authorize } from "#/middlwares/authorize.middleware.js";

const employeesRouter = Router();

employeesRouter.post(
  "/",
  authorize(),
  validate({
    bodySchema: CreateEmployeeRequestSchema,
  }),
  employeesController.createEmployee,
);

employeesRouter.patch(
  "/:id",
  authorize(),
  validate({
    paramsSchema: EmployeesParamsSchema,
    bodySchema: UpdateEmployeeRequestSchema,
  }),
  employeesController.updateEmployee,
);

employeesRouter.delete(
  "/:id",
  authorize(),
  validate({
    paramsSchema: EmployeesParamsSchema,
  }),
  employeesController.deleteEmployee,
);

employeesRouter.get(
  "/:id",
  authorize(),
  validate({
    paramsSchema: EmployeesParamsSchema,
  }),
  employeesController.getEmployeeById,
);

employeesRouter.get(
  "/",
  authorize(),
  validate({
    querySchema: EmployeesQuerySchema,
  }),
  employeesController.getEmployees,
);

export { employeesRouter };
