"use strict";
console.log("dom manipulation");
//selecting an element
let anchor = document.querySelector('a');
/*
if (anchor){
    console.log(anchor.href);
}
 */
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
