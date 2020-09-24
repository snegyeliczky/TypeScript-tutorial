"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let Yosi = { name: 'Yoshi', age: 23 };
let docOne = addUID(Yosi);
console.log(docOne.uid);
const ResOne = {
    uid: 34,
    resourceName: "milk",
    data: { name: "whit milk" }
};
const ResTwo = {
    uid: 45,
    resourceName: "vegetable",
    data: ['tomato', 'onion']
};
console.log(ResOne, ResTwo);
