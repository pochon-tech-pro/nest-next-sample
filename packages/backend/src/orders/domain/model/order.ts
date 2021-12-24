import {OrderNo} from "./orderNo";
import {Mail} from "./mail";

export class Order {
    private readonly _no: OrderNo;
    private readonly _mail: Mail;

    private constructor(no: OrderNo, mail: Mail) {
        this._no = no;
        this._mail = mail;
    }

    static create(no: OrderNo, mail: Mail): Order {
        return new Order(no, mail);
    }

    static nullObject(): Order {
        return new Order(OrderNo.nullObject(), Mail.nullObject());
    }

    public no(): OrderNo {
        return this._no;
    }

    public mail(): Mail {
        return this._mail;
    }
}