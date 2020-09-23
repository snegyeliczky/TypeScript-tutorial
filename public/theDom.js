console.log("dom manipulation");
import { Invoice } from "./classes/classes.js";
import { greetingPerson } from "./classes/interfaces.js";
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
const invOne = new Invoice("Béla", "working on electricity", 300);
const invTwo = new Invoice("Jozsi", "working on water", 543);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(e => {
    console.log(e.format());
    console.log(e.detail);
    // console.log(e.amount)
});
//interfaces
const me = {
    name: "sándi",
    age: 27,
    speak(a) {
        console.log(a);
    },
    spend(a) {
        console.log('I spent ', a);
        return a;
    }
};
greetingPerson(me);
