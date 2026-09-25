import type {
  CreateEmployeeRequest,
  Employee,
  EmployeesQuery,
  UpdateEmployeeRequest,
} from "./employees.schemas.js";

export class EmployeesService {
  constructor() {}

  async createEmployee(input: CreateEmployeeRequest): Promise<Employee> {
    return {
      id: 1,
      firstName: "john",
      lastName: "smith",
      email: "",
      departmentId: 1,
    };
  }

  async updateEmployee(
    id: number,
    input: UpdateEmployeeRequest,
  ): Promise<Employee> {
    return {
      id: 1,
      firstName: "john",
      lastName: "smith",
      email: "",
      departmentId: 1,
    };
  }

  async deleteEmployee(id: number): Promise<void> {}

  async getEmployeeById(id: number): Promise<Employee> {
    return {
      id: 1,
      firstName: "john",
      lastName: "smith",
      email: "",
      departmentId: 1,
    };
  }

  async getEmployees(query: EmployeesQuery): Promise<Employee[]> {
    return [
      {
        id: 1,
        firstName: "john",
        lastName: "smith",
        email: "",
        departmentId: 1,
      },
    ];
  }
}
