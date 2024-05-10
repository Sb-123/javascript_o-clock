const userEmail="San@one.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont's have user email");

}

/* 
 falsy values:- false,0,-0,bigInt 0n, "",null,undefined,Nan. // expect it all are truthy values

 truthy values:- "0",'false'," ",[],{},function(){},

*/

if(userEmail.length==0){
    console.log("Array is empty");
}


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
   
}


// ************************************** nullish Coalescing Operator (??): null undefined  **********************************************

let val1;
val1=5 ?? 10;
console.log(val1);  //o/p:-5
val2= null ?? 10;
console.log(val2);  // o/p:-10

var3=undefined ?? 15
console.log(var3);  // o/p:-15

val4= null ?? 10 ?? 15;
console.log(val4);  // o/p:-10

// *********************************** Terniary Operator  *************************************************************************

// condition ? true :false;
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");  // o/p:- more than 80.

// *********************************************************************************************************************************



