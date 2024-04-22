// console.log("s");
// console.log("s");
// console.log("s");
// console.log("s");
// console.log("s");
// console.log("s");

function sayMyFirstLetter(){
     console.log("a");
     console.log("a");
     console.log("a");
     console.log("a");
     console.log("a");
     console.log("a");
}

// sayMyFirstLetter()   // o/p:- a/a/a/a/a.

// function addTwoNumbers(nbr1,nbr2){
//     // return nbr1+nbr2;
//     console.log(nbr1+nbr2);
// }

function addTwoNumbers(nbr1,nbr2){
    let result=nbr1+nbr2
    return result;
    console.log("Sanjeev"); // it is unaccessible
}
addTwoNumbers(4,5); // o/p:-9
const result= addTwoNumbers(3,5);
console.log("Result:", result);