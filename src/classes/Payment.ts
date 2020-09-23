import {HasFormat} from "../interfaces/HasFormat";

export class Payment implements HasFormat{

    constructor(
        public recipient:string,
        readonly detail: string,
        private amount: number,

    ) {}

    format(){
        return `payment: ${this.recipient} is owed ${this.amount} HUF for ${this.detail}`;
    }
}