import type { Request, Response } from "express";
import { HttpResponse } from "#/shared/http-response/http-response.js";
import type { DepartmentsService } from "./departments.service.js";
import type {
  CreateDepartmentRequest,
  DepartmentsParams,
  DepartmentsQuery,
  UpdateDepartmentRequest,
} from "./departments.schemas.js";

export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  createDepartment = async (req: Request, res: Response) => {
    const input = req.validated!.body as CreateDepartmentRequest;

    const result = await this.departmentsService.createDepartment(input);

    return HttpResponse.created(res, result);
  };

  updateDepartment = async (req: Request, res: Response) => {
    const params = req.validated!.params as DepartmentsParams;
    const input = req.validated!.body as UpdateDepartmentRequest;

    const result = await this.departmentsService.updateDepartment(
      params.id,
      input,
    );

    return HttpResponse.ok(res, result);
  };

  deleteDepartment = async (req: Request, res: Response) => {
    const params = req.validated!.params as DepartmentsParams;

    await this.departmentsService.deleteDepartment(params.id);

    return HttpResponse.noContent(res);
  };

  getDepartmentById = async (req: Request, res: Response) => {
    const params = req.validated!.params as DepartmentsParams;

    const result = await this.departmentsService.getDepartmentById(params.id);

    return HttpResponse.ok(res, result);
  };

  getDepartments = async (req: Request, res: Response) => {
    const query = req.validated!.query as DepartmentsQuery;

    const result = await this.departmentsService.getDepartments(query);

    return HttpResponse.ok(res, result);
  };
}
