import type {
  CreateDepartmentRequest,
  Department,
  DepartmentsQuery,
  UpdateDepartmentRequest,
} from "./departments.schemas.js";

export class DepartmentsService {
  constructor() {}

  async createDepartment(input: CreateDepartmentRequest): Promise<Department> {
    return {
      id: 1,
      name: "IT",
      description: null,
    };
  }

  async updateDepartment(
    id: number,
    input: UpdateDepartmentRequest,
  ): Promise<Department> {
    return {
      id: 1,
      name: "IT",
      description: null,
    };
  }

  async deleteDepartment(id: number): Promise<void> {}

  async getDepartmentById(id: number): Promise<Department> {
    return {
      id: 1,
      name: "IT",
      description: null,
    };
  }

  async getDepartments(query: DepartmentsQuery): Promise<Department[]> {
    return [
      {
        id: 1,
        name: "IT",
        description: null,
      },
    ];
  }
}
