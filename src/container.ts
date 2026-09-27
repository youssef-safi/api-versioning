import { prisma } from "./infrastructure/database/prisma.js";

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

import { TasksService } from "./modules/tasks/tasks.service.js";
import { TasksController } from "./modules/tasks/tasks.controller.js";

const tasksService = new TasksService(prisma);
const tasksController = new TasksController(tasksService);

export { tasksService, tasksController };
