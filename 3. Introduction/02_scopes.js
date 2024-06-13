// let a=10;
// const b=20;
// var c=30;


if(true){
    let a=10;
const b=20;
var c=30;
}



// console.log(a);  // o/p:- a is not defined b/c a is local scopes.
// console.log(b);  // o/p:- b is not defined b/c const is local scope
// console.log(c);  // o/p:- 30 b/c var is global scopes

// *********************************** nested scopes (closer in js) ********************************************************************
function one(){
    const userName="Sanjeev"

    function two(){
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();

// ****************************** if/else scopes (closer)  *************************************
if(true){
    const userName="Sanjeev"
    if(userName==="Sanjeev"){
        const website="youtube"
        console.log(userName+website);
    }
    // console.log(website);
}
// console.log(userName);


// **************************** interesting ********************************************************



console.log(addOne(5)); // o/p:- 6. It give the result but we can see that function is below b/c function is oction.

function addOne(num){
    return num+1;

}
addOne(5)


addTwo(5) // o/p:- error b/c function is below means that  function is still not declared b/c const isn't an action.
           // we could not use the function before declaration.
const addTwo=function(num){
    return num+2;
}
addTwo(5)

// ********************************************************************************************************************************
 

