import {HasFormat} from "../interfaces/HasFormat.js";
import {Invoice} from "../classes/classes.js";
import {greetingPerson,isPerson} from "../interfaces/interfaces.js";
import {Payment} from "../classes/Payment.js";

//selecting an element

/*
let anchor = document.querySelector('a')!;
console.log(anchor.href);

if (anchor){
    console.log(anchor.href);
}

const form = document.querySelector('.new-item-form')  as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber)
});

 */
//classes

const invOne= new Invoice("Béla", "working on electricity",300);
const invTwo = new Invoice("Jozsi","working on water", 543);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(e=>{
    console.log(e.format());
    console.log(e.detail)
   // console.log(e.amount)
});

//interfaces

const me:isPerson={
    name:"sándi",
    age:27,
    speak(a: string): void {
        console.log(a);
    },
    spend(a: number): number {
        console.log('I spent ',a);
        return a;
    }
};

greetingPerson(me);

//interfaces with classes

let docOne: HasFormat;
let docTwo: HasFormat;

docOne = new Payment("Géza","For car reparation",4324);

docTwo= new Invoice("Mari","cooking lunch",3210);

const spends: HasFormat[]=[];
spends.push(docOne);
spends.push(docTwo);

spends.forEach(e=>{
    console.log("Has Format:");
    console.log(e.format());
});