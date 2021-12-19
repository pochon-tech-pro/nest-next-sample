import { Module } from '@nestjs/common';
import {OrdersController} from "./ui/orders.controller";
import {OrdersService} from "./app/service/ordersService";

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
