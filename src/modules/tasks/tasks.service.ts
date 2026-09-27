import type { PrismaClient } from "#/infrastructure/database/generated/prisma/client.js";
import { NotFoundError } from "#/shared/errors/errors.js";
import type { TaskUpdateInput } from "../../infrastructure/database/generated/prisma/models.js";
import type {
  CreateTaskRequest,
  Task,
  UpdateTaskRequest,
} from "./tasks.schemas.js";

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

  async updateTask(id: string, input: UpdateTaskRequest): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (task === null) {
      throw new NotFoundError("Task not found");
    }

    let data: TaskUpdateInput = {};

    if (input.title) data.title = input.title;
    if (input.description) data.description = input.description;
    if (input.completed) data.completed = input.completed;

    const updatedTask = await this.prisma.task.update({
      data,
      where: {
        id,
      },
    });

    return {
      id: updatedTask.id,
      title: updatedTask.title,
      description: updatedTask.description,
      completed: updatedTask.completed,
    };
  }
}
