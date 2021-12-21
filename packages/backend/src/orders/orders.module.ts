import { Module } from '@nestjs/common';
import {OrdersController} from "./ui/orders.controller";
import {OrdersService} from "./app/service/ordersService";
import {IOrderRepository} from "./app/repository/orderRepository";
import {OrderRepository} from "./infra/repository/orderRepository";

const orderRepositoryProvider = { provide: IOrderRepository, useClass: OrderRepository };

@Module({
    controllers: [OrdersController],
    providers: [
        OrdersService,
        orderRepositoryProvider
    ],
})
export class OrdersModule {}
