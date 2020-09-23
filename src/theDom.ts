console.log("dom manipulation");

//selecting an element

let anchor = document.querySelector('a')!;

/*
if (anchor){
    console.log(anchor.href);
}
 */

console.log(anchor.href);

const form = document.querySelector('.new-item-form')  as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber)
});

