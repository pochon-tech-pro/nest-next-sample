export class OrderNo {
    private readonly _value: number

    private constructor(value: number) {
        this._value = value;
    }

    static create(value: number): OrderNo {
        return new OrderNo(value);
    }

    static nullObject(): OrderNo {
        return new OrderNo(0);
    }

    public value(): number {
        return this._value;
    }
}
