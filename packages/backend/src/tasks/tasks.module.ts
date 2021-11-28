import { Module } from '@nestjs/common';
import {TasksController} from "./tasks.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TasksService} from "./tasks.service";
import {Task} from "../entities/task.entity";

@Module({
    controllers: [TasksController],
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [TasksService],
    exports: [TypeOrmModule],
})
export class TasksModule {}
