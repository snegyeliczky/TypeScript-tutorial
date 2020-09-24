


const addUID = <T extends {name:string, age:Number}>(obj:T) =>{
    let uid = Math.floor(Math.random()*100);
    return{ ...obj,uid}
};

let Yosi = {name:'Yoshi', age:23}

let docOne = addUID(Yosi);

console.log(docOne.uid);

// with interfaces

interface Resource<T> {
    uid:number,
    resourceName:string,
    data:T
}

const ResOne : Resource<object>={
    uid:34,
    resourceName:"milk",
    data:{name:"whit milk"}
};

const ResTwo : Resource<string[]>={
    uid:45,
    resourceName:"vegetable",
    data: ['tomato','onion']
};

console.log(ResOne, ResTwo);