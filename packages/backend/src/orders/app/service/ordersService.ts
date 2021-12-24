import {Inject, Injectable} from "@nestjs/common";
import {IOrderRepository} from "../repository/orderRepository";
import {Orders} from "../../domain/model/Orders";
import {Order} from "../../domain/model/order";
import {CreateTaskDTO} from "../../ui/dto/createOrderDTO";
import {OrderNo} from "../../domain/model/orderNo";
import {Mail} from "../../domain/model/mail";

@Injectable()
export class OrdersService {
    constructor(
        @Inject(IOrderRepository) private readonly repository: IOrderRepository
    ) {}

    async findAll(): Promise<Orders> {
        return this.repository.findAll();
    }

    async register(dto: CreateTaskDTO): Promise<Order> {
        const latestOrderNo = await this.repository.latestOrderNo();
        return this.repository.save(OrdersService.toOrder(dto, latestOrderNo));
    }

    private static toOrder(dto: CreateTaskDTO, latestOrderNo: OrderNo): Order
    {
        return Order.create(latestOrderNo.nextNo(), Mail.create(dto.mail));
    }
}