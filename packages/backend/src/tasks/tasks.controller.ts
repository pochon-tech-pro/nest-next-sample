import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "../entities/task.entity";
import {CreateTaskDTO} from "../dto/create-task.dto";
import {UpdateTaskDTO} from "../dto/update-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {
    }

    @Get()
    async findAll(): Promise<Task[]> {
        return await this.taskService.findAll()
    }

    @Post()
    async create(@Body() createTaskDTO: CreateTaskDTO) {
        return await this.taskService.create(createTaskDTO)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDTO) {
        return await this.taskService.update(+id, updateTaskDTO)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.taskService.remove(+id)
    }
}