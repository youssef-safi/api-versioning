import z from "#/shared/zod-openapi/zod.js";
import { BaseQuerySchema } from "#/shared/schemas/base-query.schema.js";

export const CreateEmployeeRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string(),
  departmentId: z.coerce.number(),
});

export type CreateEmployeeRequest = z.infer<typeof CreateEmployeeRequestSchema>;

export const UpdateEmployeeRequestSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.email().optional(),
  password: z.string().optional(),
  departmentId: z.coerce.number(),
});

export type UpdateEmployeeRequest = z.infer<typeof UpdateEmployeeRequestSchema>;

export const EmployeesQuerySchema = BaseQuerySchema;

export type EmployeesQuery = z.infer<typeof EmployeesQuerySchema>;

export const EmployeesParamsSchema = z.object({
  id: z.coerce.number(),
});

export type EmployeesParams = z.infer<typeof EmployeesParamsSchema>;

export const EmployeeSchema = z.object({
  id: z.coerce.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  departmentId: z.coerce.number(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
