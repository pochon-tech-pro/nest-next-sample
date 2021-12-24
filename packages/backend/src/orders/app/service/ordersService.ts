import {Inject, Injectable} from "@nestjs/common";
import {IOrderRepository} from "../repository/orderRepository";
import {Orders} from "../../domain/model/Orders";

@Injectable()
export class OrdersService {
    constructor(
        @Inject(IOrderRepository) private readonly repository: IOrderRepository
    ) {}

    async findAll(): Promise<Orders> {
        return this.repository.findAll();
    }
}