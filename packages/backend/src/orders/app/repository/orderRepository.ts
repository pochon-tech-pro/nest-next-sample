import {Order} from "../../domain/model/order";

export interface IOrderRepository {
    of(): Order;
}
export const IOrderRepository = Symbol("IOrderRepository");