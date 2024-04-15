//primitive
// There are mainly 7 type.
// 7 types : string,number, boolean, null, undefined, symbol,BigInt.

const score=100;
const scoreValue =100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;  // default value is undefined.

const id= Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);
console.log(id ==anotherID);

const bigNumber= 3334335349504354976925893572908n;



// Reference (Non primitive)
// types : array, object, functions.

const heros=["shaktiman", "naagraj", "doga"];
let myOjb={
    name:"Sanjeev",
    age:22,

}

const myfuction= function(){
    console.log("Hello, Sanjeev");
    
}

