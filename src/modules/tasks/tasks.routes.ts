import { Router } from "express";
import { tasksController } from "#/container.js";
import {
  CreateTaskRequestSchema,
  TaskParamsSchema,
  TaskQuerySchema,
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

tasksRouter.delete(
  "/:id",
  authorize(),
  validate({
    paramsSchema: TaskParamsSchema,
  }),
  tasksController.deleteTask,
);

tasksRouter.get(
  "/:id",
  authorize(),
  validate({
    paramsSchema: TaskParamsSchema,
  }),
  tasksController.getTaskById,
);

tasksRouter.get(
  "/",
  authorize(),
  validate({
    querySchema: TaskQuerySchema,
  }),
  tasksController.getTasks,
);

export { tasksRouter };
