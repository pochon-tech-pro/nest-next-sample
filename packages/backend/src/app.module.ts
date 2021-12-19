import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TasksModule} from './tasks/tasks.module';
import {OrdersModule} from "./orders/orders.module";

@Module({
    imports: [TypeOrmModule.forRoot(), TasksModule, OrdersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}