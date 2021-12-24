import {Order} from "./order";
export class Orders {
    private readonly _values: Order[];

    private constructor(...orders: Order[]) {
        this._values = orders;
    }

    static create(orders: Order[]): Orders {
        return new Orders(...orders);
    }

    static nullObject(): Orders {
        return new Orders();
    }

    public values(): Order[] {
        return this._values;
    }
}