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
    // let result=nbr1+nbr2  // M-I
    // return result;

    return nbr1+nbr2;    // M-II and o/p is same.
    // console.log("Sanjeev"); // it is unaccessible
}
addTwoNumbers(4,5); // o/p:-9
const result= addTwoNumbers(3,5);
console.log("Result:", result);

// ****************************************************                    ************************************************
function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username");
        return ;

    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sanjeev")) // o/p:- Sanjeev just logged in 



// ********************************************  shopping cart (rest operator) *********************************************************************
 function calculateCartPrice(...num1){
    return num1;

 }
console.log(calculateCartPrice(200,400,500)); // o/p:- [200,400,500]

// ***************************************************  part of rest operator  ****************************************************************************

const user={
    username: "Suman",
    // price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// M-I
handleObject(user)  // o/p:-username is Suman and price is undefined
// M-II : we can directly send the object to the function.
handleObject({
    username:"Saksh",
    price:499
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]


}
console.log(returnSecondValue(myNewArray));