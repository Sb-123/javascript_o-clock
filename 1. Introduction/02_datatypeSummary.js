//primitive
// There are mainly 7 type.
// 7 types : string,number, boolean, null, undefined, symbol,BigInt. // NNBBSSU

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

//*********************************************************************************************************** */
// stack(Primitive), head(Non-primitive)

let myYoutubeName="Sanjeev Suman"
let anotherName=myYoutubeName;
anotherName="Kunal Au"
console.log(myYoutubeName);
console.log(anotherName);
/* o/p:-
Sanjeev suman
Kunal Au
*/


let user={
    email:"user@google.com",
    UPI: "user@ybl"
    
}
let user2=user;
user2.email="sanjeev@google.com"
console.log(user.email);
console.log(user2.email);
/* o/p:-
sanjeev@google.com
sanjeev@google.com
*/


