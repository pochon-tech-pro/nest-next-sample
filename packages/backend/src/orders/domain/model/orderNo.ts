export class OrderNo {
    private readonly _value: number

    constructor(value: number) {
        this._value = value;
    }

    public value(): number {
        return this._value;
    }
}
