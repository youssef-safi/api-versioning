import type { Request, Response } from "express";
import { HttpResponse } from "#/shared/http-response/http-response.js";
import type { EmployeesService } from "./employees.service.js";
import type {
  CreateEmployeeRequest,
  EmployeesParams,
  EmployeesQuery,
  UpdateEmployeeRequest,
} from "./employees.schemas.js";

export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  createEmployee = async (req: Request, res: Response) => {
    const input = req.validated!.body as CreateEmployeeRequest;

    const result = await this.employeesService.createEmployee(input);

    return HttpResponse.created(res, result);
  };

  updateEmployee = async (req: Request, res: Response) => {
    const params = req.validated!.params as EmployeesParams;
    const input = req.validated!.body as UpdateEmployeeRequest;

    const result = await this.employeesService.updateEmployee(params.id, input);

    return HttpResponse.ok(res, result);
  };

  deleteEmployee = async (req: Request, res: Response) => {
    const params = req.validated!.params as EmployeesParams;

    await this.employeesService.deleteEmployee(params.id);

    return HttpResponse.noContent(res);
  };

  getEmployeeById = async (req: Request, res: Response) => {
    const params = req.validated!.params as EmployeesParams;

    const result = await this.employeesService.getEmployeeById(params.id);

    return HttpResponse.ok(res, result);
  };

  getEmployees = async (req: Request, res: Response) => {
    const query = req.validated!.query as EmployeesQuery;

    const result = await this.employeesService.getEmployees(query);

    return HttpResponse.ok(res, result);
  };
}
