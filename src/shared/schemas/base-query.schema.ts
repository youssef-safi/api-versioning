import z from "#/shared/zod-openapi/zod.js";

export const BaseQuerySchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
});
