import {Order} from "../../domain/model/order";
import {OrderNo} from "../../domain/model/orderNo";
import {Orders} from "../../domain/model/Orders";

export interface IOrderRepository {
    findByOrderNo(orderNo: OrderNo): Promise<Order>;
    findAll(): Promise<Orders>;
}
export const IOrderRepository = Symbol("IOrderRepository");