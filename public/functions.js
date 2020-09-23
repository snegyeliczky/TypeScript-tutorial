"use strict";
console.log("functions");
//functions
let addF;
addF = (a, b) => {
    return a + b;
};
const strictF = (a, b) => {
    return a + b;
};
const optionalParam = (a, b, c = "10") => {
    console.log(c);
    console.log(b);
    return b ? a + b : a;
};
console.log(12, "fff");
console.log(strictF(12, 3) /*strictF(12,"ff")*/);
console.log(optionalParam(12, 4));
let sandi = { name: "Sándi", age: 27 };
const greeting = (user) => {
    console.log(`Hello ${user.name}`);
};
greeting(sandi);
//Function Signatures
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else
        return numTwo - numOne;
};
console.log(calc(3, 5), calc(3, 5, "add"));
let ageOfPerson;
ageOfPerson = (user) => {
    console.log(`${user.name} is ${user.age} years old!`);
};
ageOfPerson(sandi);
console.log("pull request");
