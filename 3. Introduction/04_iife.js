// IIFE :- Immediately Invoked Function Expressions.


// named iife (M-I)
(function chai(){
    console.log(`DB CONNECTED`);

})();
// o/p:- BD CONNECTED
// jo function immediately execute ho jaye aur in order to remove the golbal scopes pollution 


//  use arrow function in iife.
// un-named iife.(M-II)
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);

})("Sanjeev");



// ***********************************************************  ***********************************************************