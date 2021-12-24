import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrdersService} from "../app/service/ordersService";
import {Orders} from "../domain/model/Orders";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {
    }

    @Get()
    async findAll(): Promise<Orders> {
        return await this.ordersService.findAll();
    }
}