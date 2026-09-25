import z from "#/shared/zod-openapi/zod.js";
import { BaseQuerySchema } from "#/shared/schemas/base-query.schema.js";

export const CreateDepartmentRequestSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export type CreateDepartmentRequest = z.infer<
  typeof CreateDepartmentRequestSchema
>;

export const UpdateDepartmentRequestSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export type UpdateDepartmentRequest = z.infer<
  typeof UpdateDepartmentRequestSchema
>;

export const DepartmentsQuerySchema = BaseQuerySchema;

export type DepartmentsQuery = z.infer<typeof DepartmentsQuerySchema>;

export const DepartmentsParamsSchema = z.object({
  id: z.coerce.number(),
});

export type DepartmentsParams = z.infer<typeof DepartmentsParamsSchema>;

export const DepartmentSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  description: z.string().nullable(),
});

export type Department = z.infer<typeof DepartmentSchema>;
