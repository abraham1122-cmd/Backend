


export class OrderNotFoundError extends Error {

    constructor(public readonly id: number){

        super(`order with Id ${id} was not found`);

       this.name = "OrderNotFoundError";
    }

}

export class PaymentDeclinedError extends Error {

    constructor(
        public readonly phone: string,
        public readonly reason: string
    ){
        super(
            `sorry payment declined with ${phone}  ${reason}`
        );

        this.name = "PaymentDeclinedError";
    }
}