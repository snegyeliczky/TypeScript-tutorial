console.log("hy")

let names =[2,4,12];
//names =["jani", "gyuszi"];
names.push(1);
//names.push("kett"); names[0]="hy"
names[0]=3;
console.log(names);

let mixed = ["hy", 1,2,"ok"];
mixed.push(4);
mixed.push("klassz");

console.log(mixed);

//objects

let ninja = {
    name:"josi",
    belt:"black",
    age:13
};

ninja.age=27;
ninja.name="Sándi";
//ninja.belt=45
//ninja.skills=["css"]

ninja= {
    name:"josi",
    belt:"black",
    age:13
};

let sword:string;
let point:number;

sword="katana";
//point="három"
point=2;

let list: string[] = [];

list =["gg"];
list.push("hy");
//list.push(3)

let mixedList: (string|number)[]=[];

mixedList.push(2);
mixedList.push("hy");
console.log(mixedList);

let obj: object;

//obj="hy"

obj = {name:"han", age:23}

let objPreConcept : {
    name:string,
    age:number
};

objPreConcept = {name:"hy", age:34}

console.log(objPreConcept);

let anyType : any = 34;

console.log(anyType);
anyType="hy";
console.log(anyType);

let ninjaWarior:{
    name:any,
    age:any
};

ninjaWarior={name:34, age:"jhon"};
anyType =  ninjaWarior;

console.log(anyType)


