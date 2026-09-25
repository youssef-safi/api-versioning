import { DepartmentsService } from "./modules/departments/departments.service.js";
import { DepartmentsController } from "./modules/departments/departments.controller.js";

const departmentsService = new DepartmentsService();
const departmentsController = new DepartmentsController(departmentsService);

export { departmentsService, departmentsController };

import { EmployeesService } from "./modules/employees/employees.service.js";
import { EmployeesController } from "./modules/employees/employees.controller.js";

const employeesService = new EmployeesService();
const employeesController = new EmployeesController(employeesService);

export { employeesService, employeesController };
