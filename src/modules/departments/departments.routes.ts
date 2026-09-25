import { Router } from "express";
import { validate } from "#/middlwares/validate.middleware.js";
import { authorize } from "#/middlwares/authorize.middleware.js";
import {
  CreateDepartmentRequestSchema,
  DepartmentsParamsSchema,
  DepartmentsQuerySchema,
  UpdateDepartmentRequestSchema,
} from "./departments.schemas.js";
import { departmentsController } from "#/container.js";

const departmentsRouter = Router();

departmentsRouter.post(
  "/",
  authorize(),
  validate({
    bodySchema: CreateDepartmentRequestSchema,
  }),
  departmentsController.createDepartment,
);

departmentsRouter.patch(
  "/:id",
  authorize(),
  validate({
    paramsSchema: DepartmentsParamsSchema,
    bodySchema: UpdateDepartmentRequestSchema,
  }),
  departmentsController.updateDepartment,
);

departmentsRouter.delete(
  "/:id",
  authorize(),
  validate({
    paramsSchema: DepartmentsParamsSchema,
  }),
  departmentsController.deleteDepartment,
);

departmentsRouter.get(
  "/:id",
  authorize(),
  validate({
    paramsSchema: DepartmentsParamsSchema,
  }),
  departmentsController.getDepartmentById,
);

departmentsRouter.get(
  "/",
  authorize(),
  validate({
    querySchema: DepartmentsQuerySchema,
  }),
  departmentsController.getDepartments,
);

export { departmentsRouter };
