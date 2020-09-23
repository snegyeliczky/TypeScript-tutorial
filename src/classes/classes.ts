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

export class Invoice {

    constructor(
        public client:string,
        readonly detail: string,
        private amount: number,

    ) {}

    format(){
        return `${this.client} owes ${this.amount} HUF for ${this.detail}`;
    }
}