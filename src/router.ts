import { Router } from "express";
import { departmentsRouter } from "./modules/departments/departments.routes.js";
import { employeesRouter } from "./modules/employees/employees.routes.js";
import { authenticate } from "./middlwares/authenticate.middlware.js";
import { tasksRouter } from "./modules/tasks/tasks.routes.js";

const apiRouter = Router();

apiRouter.use("/departments", authenticate(), departmentsRouter);
apiRouter.use("/employees", authenticate(), employeesRouter);
apiRouter.use("/tasks", authenticate(), tasksRouter);

export { apiRouter };
