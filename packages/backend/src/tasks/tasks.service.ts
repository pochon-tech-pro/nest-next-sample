import {Injectable} from '@nestjs/common';
import {Task} from "../entities/task.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {InsertResult, Repository} from "typeorm";
import {CreateTaskDTO} from "../dto/create-task.dto";
import {UpdateTaskDTO} from "../dto/update-task.dto";

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.find()
    }

    async create(task: CreateTaskDTO): Promise<InsertResult> {
        return await this.taskRepository.insert(task)
    }

    async update(id: number, updateTaskDTO: UpdateTaskDTO) {
        return await this.taskRepository.update(id, updateTaskDTO)
    }

    async remove(id: number) {
        return await this.taskRepository.delete(id)
    }
}