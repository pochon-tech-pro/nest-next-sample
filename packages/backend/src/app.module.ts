import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TasksModule} from './tasks/tasks.module';

@Module({
    imports: [TypeOrmModule.forRoot(), TasksModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}