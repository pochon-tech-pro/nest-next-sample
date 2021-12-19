import {OrderNo} from "./orderNo";
import {Mail} from "./mail";

export class Order {
    private readonly _no: OrderNo;
    private readonly _mail: Mail;

    constructor(no: OrderNo, mail: Mail) {
        this._no = no;
        this._mail = mail;
    }

    public no(): OrderNo {
        return this._no;
    }

    public mail(): Mail {
        return this._mail;
    }
}