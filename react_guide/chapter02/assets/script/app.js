/*
import {a, b as bb} from './util.js';

console.log(a);
console.log(bb);
*/

class User {
    name;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("HI , " + this.name)
    }

}

const u1 = new User("gildong", 20);
u1.greet();


let a= {
    "a" : 1,
    "b" : 2
}

a.findIndex((item)=>{
    console.log(item)
})