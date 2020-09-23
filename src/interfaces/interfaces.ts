
export interface isPerson {
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}


let someone: isPerson;

export const greetingPerson =(person:isPerson)=>{
    person.speak(`Hello I am ${person.name}`)
};
