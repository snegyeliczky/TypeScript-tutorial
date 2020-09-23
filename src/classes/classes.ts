//classes
/*
//normal class:

class Invoice {
    public client:string;
    readonly detail:string;
    private amount:number;

    constructor(client: string, detail: string, amount: number) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }

    format(){
        return `${this.client} owes ${this.amount} HUF for ${this.detail}`;
    }
}

 */
import {HasFormat} from "../interfaces/HasFormat";

export class Invoice implements HasFormat{

    constructor(
        public client:string,
        readonly detail: string,
        private amount: number,

    ) {}

    format(){
        return `invoice: ${this.client} owes ${this.amount} HUF for ${this.detail}`;
    }
}