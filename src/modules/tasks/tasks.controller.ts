import type { Request, Response } from "express";
import type { TasksService } from "./tasks.service.js";
import type {
  CreateTaskRequest,
  TaskParams,
  TaskQuery,
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

    return HttpResponse.ok(res, result);
  };

  deleteTask = async (req: Request, res: Response) => {
    const params = req.validated!.params as TaskParams;

    await this.tasksService.deleteTask(params.id);

    return HttpResponse.noContent(res);
  };

  getTaskById = async (req: Request, res: Response) => {
    const params = req.validated!.params as TaskParams;

    const result = await this.tasksService.getTaskById(params.id);

    return HttpResponse.ok(res, result);
  };

  getTasks = async (req: Request, res: Response) => {
    const query = req.validated!.query as TaskQuery;

    const result = await this.tasksService.getTasks(query);

    return HttpResponse.ok(res, result);
  };
}
