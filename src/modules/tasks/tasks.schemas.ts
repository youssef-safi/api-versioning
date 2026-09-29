import z from "#/shared/zod-openapi/zod.js";
import { BaseQuerySchema } from "#/shared/schemas/base-query.schema.js";

// Create Task Request Schema

export const CreateTaskRequestSchema = z.object({
  title: z.string().max(200).min(1),
  description: z.string().optional(),
});

export type CreateTaskRequest = z.infer<typeof CreateTaskRequestSchema>;

// Update Task Request Schema

export const UpdateTaskRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
});

export type UpdateTaskRequest = z.infer<typeof UpdateTaskRequestSchema>;

// Task Params Schema

export const TaskParamsSchema = z.object({
  id: z.uuid(),
});

export type TaskParams = z.infer<typeof TaskParamsSchema>;

// Task Query Schema

export const TaskQuerySchema = BaseQuerySchema;

export type TaskQuery = z.infer<typeof TaskQuerySchema>;

// Task Schema

export const TaskSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  description: z.string().nullable(),
  completed: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;

// Task Array Schema

export const TaskArraySchema = z.array(TaskSchema);
