console.log("functions");

//functions

let addF :Function;

addF=(a:number,b:number)=>{
    return a+b;
};

const strictF = (a:number, b:number):number=>{
    return a+b;
};

const optionalParam= ( a:number, b?:number, c:string|number="10"):number=>{
    console.log(c);
    console.log(b);
    return b?a+b:a;
};

console.log( 12,"fff");

console.log( strictF(12,3) /*strictF(12,"ff")*/);

console.log(optionalParam(12,4));

//type variables

type userObj = {name:string,age:number};

let sandi = {name:"Sándi", age:27};

const greeting =(user:userObj)=>{
    console.log(`Hello ${user.name}`)
};

greeting(sandi);

//Function Signatures

let calc : (a:number,b:number, c?:string) => number;

calc = (numOne: number, numTwo:number, action?:string):number =>{
    if (action==="add"){
        return numOne+numTwo
    }else return numTwo-numOne;
};

console.log(calc(3,5), calc(3,5,"add"));

let ageOfPerson: (person:userObj) => void;

ageOfPerson=(user:userObj)=>{
    console.log(`${user.name} is ${user.age} years old!`)
};

ageOfPerson(sandi);

console.log("pull request");