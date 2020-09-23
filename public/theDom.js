"use strict";
console.log("dom manipulation");
//selecting an element
/*
let anchor = document.querySelector('a')!;
console.log(anchor.href);

if (anchor){
    console.log(anchor.href);
}
 */
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
//classes
class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} HUF for ${this.detail}`;
    }
}
const invOne = new Invoice("Béla", "working on electricity", 300);
const invTwo = new Invoice("Jozsi", "working on water", 543);
console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
