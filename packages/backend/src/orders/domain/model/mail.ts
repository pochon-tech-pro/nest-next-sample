export class Mail {
    private readonly _value: string

    constructor(value: string) {
        this._value = value;
    }

    static create(value: string): Mail {
        return new Mail(value);
    }

    static nullObject(): Mail {
        return new Mail('');
    }

    public value(): string {
        return this._value;
    }
}
