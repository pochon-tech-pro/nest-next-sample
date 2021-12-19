import {Injectable} from "@nestjs/common";
import {Order} from "../../domain/model/order";
import {OrderNo} from "../../domain/model/orderNo";
import {Mail} from "../../domain/model/mail";

@Injectable()
export class OrdersService {

    constructor(
    ) {}

    async findAll(): Promise<Order> {
        const order = new Order(new OrderNo(123), new Mail('test.com'));
        console.log(order);
        return order;
    }
}