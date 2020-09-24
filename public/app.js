import { Invoice } from "./classes/classes.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const container = document.querySelector('ul');
const listTemplate = new ListTemplate(container);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
        listTemplate.render(doc, type.value, 'start');
    }
    else {
        doc = new Payment(...values);
        listTemplate.render(doc, type.value, 'end');
    }
});
//tuples
let tuple = ["hy", true, 23];
let student;
for (let i = 0; i < 1; i++) {
    student = [i, "Child" + i];
    console.log(student);
}
