import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrdersService} from "../app/service/ordersService";
import {Order} from "../domain/model/order";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {
    }

    @Get()
    async findAll(): Promise<Order> {
        return await this.ordersService.findAll();
    }
}