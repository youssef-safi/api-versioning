import type { Request, Response } from "express";
import type { TasksService } from "./tasks.service.js";
import type {
  CreateTaskRequest,
  TaskParams,
  UpdateTaskRequest,
} from "./tasks.schemas.js";
import { HttpResponse } from "#/shared/http-response/http-response.js";

export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  createTask = async (req: Request, res: Response) => {
    const request = req.validated!.body as CreateTaskRequest;

    const result = await this.tasksService.createTask(request);

    return HttpResponse.created(res, result);
  };

  updateTask = async (req: Request, res: Response) => {
    const params = req.validated!.params as TaskParams;
    const request = req.validated!.body as UpdateTaskRequest;

    const result = await this.tasksService.updateTask(params.id, request);

    return HttpResponse.created(res, result);
  };
}
