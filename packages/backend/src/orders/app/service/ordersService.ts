import {Inject, Injectable} from "@nestjs/common";
import {Order} from "../../domain/model/order";
import {IOrderRepository} from "../repository/orderRepository";

@Injectable()
export class OrdersService {
    constructor(
        @Inject(IOrderRepository) private readonly repository: IOrderRepository
    ) {}

    async findAll(): Promise<Order> {
        return this.repository.of();
    }
}