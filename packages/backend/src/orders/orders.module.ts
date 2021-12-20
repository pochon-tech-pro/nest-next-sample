import { Module } from '@nestjs/common';
import {OrdersController} from "./ui/orders.controller";
import {OrdersService} from "./app/service/ordersService";
import {IOrderRepository} from "./app/repository/orderRepository";
import {OrderRepository} from "./infra/repository/orderRepository";

@Module({
    controllers: [OrdersController],
    providers: [
        OrdersService,
        {
            provide: IOrderRepository,
            useClass: OrderRepository
        }
    ],
})
export class OrdersModule {}
