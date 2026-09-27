import type { Request, Response } from "express";
import type { TasksService } from "./tasks.service.js";
import type { CreateTaskRequest } from "./tasks.schemas.js";
import { HttpResponse } from "#/shared/http-response/http-response.js";

export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  createTask = async (req: Request, res: Response) => {
    const request = req.validated!.body as CreateTaskRequest;

    const result = await this.tasksService.createTask(request);

    return HttpResponse.created(res, result);
  };
}
