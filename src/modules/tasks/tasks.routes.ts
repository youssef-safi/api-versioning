import { Router } from "express";
import { tasksController } from "#/container.js";
import { CreateTaskRequestSchema } from "./tasks.schemas.js";
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

export { tasksRouter };
