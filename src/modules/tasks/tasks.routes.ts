import { Router } from "express";
import { tasksController } from "#/container.js";
import {
  CreateTaskRequestSchema,
  TaskParamsSchema,
  UpdateTaskRequestSchema,
} from "./tasks.schemas.js";
import { validate } from "#/middlwares/validate.middleware.js";
import { authorize } from "#/middlwares/authorize.middleware.js";

const tasksRouter = Router();

tasksRouter.post(
  "/",
  authorize(),
  validate({
    bodySchema: CreateTaskRequestSchema,
  }),
  tasksController.createTask,
);

tasksRouter.patch(
  "/:id",
  authorize(),
  validate({
    paramsSchema: TaskParamsSchema,
    bodySchema: UpdateTaskRequestSchema,
  }),
  tasksController.updateTask,
);

export { tasksRouter };
