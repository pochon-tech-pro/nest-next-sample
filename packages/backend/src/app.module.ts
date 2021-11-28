import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [TypeOrmModule.forRoot(), TasksModule],
    controllers: [AppController, TasksController],
    providers: [AppService, TasksService],
})
export class AppModule {}