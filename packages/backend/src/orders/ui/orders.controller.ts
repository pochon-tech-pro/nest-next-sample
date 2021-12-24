import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrdersService} from "../app/service/ordersService";
import {Orders} from "../domain/model/Orders";
import {Order} from "../domain/model/order";
import {CreateTaskDTO} from "./dto/createOrderDTO";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get()
    async findAll(): Promise<Orders> {
        return await this.ordersService.findAll();
    }

    @Post()
    async register(@Body() dto: CreateTaskDTO): Promise<Order> {
        // curl -X POST -H "Content-Type: application/json" -d '{"mail":"yamada@example.com"}' localhost:3000/orders/
        return await this.ordersService.register(dto);
    }
}