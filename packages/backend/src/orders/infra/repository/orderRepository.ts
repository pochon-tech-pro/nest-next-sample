import {Order} from "../../domain/model/order";
import {IOrderRepository} from "../../app/repository/orderRepository";
import {OrderNo} from "../../domain/model/orderNo";
import {Mail} from "../../domain/model/mail";
import {Injectable} from "@nestjs/common";
import {OrderEntity} from "../entities/order.entity";
import {getRepository} from "typeorm";
import {Orders} from "../../domain/model/Orders";

@Injectable()
export class OrderRepository implements IOrderRepository {

    async findByOrderNo(orderNo: OrderNo): Promise<Order> {
        return this.toOrder(
            await getRepository(OrderEntity).findOne({no: orderNo.value()})
        );
    }

    async findAll(): Promise<Orders> {
        return this.toOrders(await getRepository(OrderEntity).find());
    }

    async latestOrderNo(): Promise<OrderNo> {
        const entity = await getRepository(OrderEntity).findOne({order: {id: 'DESC'}});
        return entity === undefined ? OrderNo.nullObject() : OrderNo.create(entity.no);
    }

    async save(order: Order): Promise<Order> {
        await getRepository(OrderEntity).save(this.toEntity(order));
        return order;
    }

    private toOrder(entity?: OrderEntity): Order {
        return entity
            ? Order.create(OrderNo.create(entity.no), Mail.create(entity.mail))
            : Order.nullObject();
    }

    private toOrders(entities: OrderEntity[]): Orders {
        return Orders.create(entities.map((entity: OrderEntity) => {
            return this.toOrder(entity);
        }));
    }

    private toEntity(order: Order): OrderEntity {
        const entity = new OrderEntity();
        entity.no = order.no().value();
        entity.mail = order.mail().value();
        return entity;
    }
}