import z from "#/shared/zod-openapi/zod.js";

export const CreateTaskRequestSchema = z.object({
  title: z.string().max(200).min(1),
  description: z.string().optional(),
});

export type CreateTaskRequest = z.infer<typeof CreateTaskRequestSchema>;

export const TaskSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  description: z.string().nullable(),
  completed: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
