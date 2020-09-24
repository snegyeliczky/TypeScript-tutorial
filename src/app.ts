import {HasFormat} from "./interfaces/HasFormat.js";
import {Invoice} from "./classes/classes.js";
import {Payment} from "./classes/Payment.js";
import {ListTemplate} from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form')  as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const container = document.querySelector('ul') as HTMLUListElement;
const listTemplate = new ListTemplate(container);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let values:[string,string,number];
    values = [toForm.value,details.value,amount.valueAsNumber];

    let doc: HasFormat;
    if (type.value==='invoice'){
        doc=new Invoice(...values);
        listTemplate.render(doc,type.value,'start');
    }else {
        doc=new Payment(...values);
        listTemplate.render(doc,type.value,'end');
    }

});


//tuples

let tuple: [string,boolean,number] = ["hy",true,23];

let student: [number,string];

for (let i = 0; i < 1; i++) {
    student = [i,"Child"+i];
    console.log(student);
}

