import {Order} from "../../domain/model/order";
import {IOrderRepository} from "../../app/repository/orderRepository";
import {OrderNo} from "../../domain/model/orderNo";
import {Mail} from "../../domain/model/mail";
import {Injectable} from "@nestjs/common";

@Injectable()
export class OrderRepository implements IOrderRepository{
    of(): Order {
        return new Order(new OrderNo(987), new Mail('test.com'));
    }
}