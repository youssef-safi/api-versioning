import type { PrismaClient } from "#/infrastructure/database/generated/prisma/client.js";
import type { CreateTaskRequest, Task } from "./tasks.schemas.js";

export class TasksService {
  constructor(private readonly prisma: PrismaClient) {}

  async createTask(input: CreateTaskRequest): Promise<Task> {
    const task = await this.prisma.task.create({
      data: {
        title: input.title,
        description: input.description ?? null,
      },
    });

    return {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
    };
  }
}
