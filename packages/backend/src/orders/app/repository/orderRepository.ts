import {Order} from "../../domain/model/order";
import {OrderNo} from "../../domain/model/orderNo";
import {Orders} from "../../domain/model/Orders";

export interface IOrderRepository {
    findByOrderNo(orderNo: OrderNo): Promise<Order>;
    findAll(): Promise<Orders>;
    latestOrderNo(): Promise<OrderNo>;
    save(order: Order): Promise<Order>;
}
export const IOrderRepository = Symbol("IOrderRepository");