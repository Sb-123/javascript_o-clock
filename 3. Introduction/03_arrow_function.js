const user={
    username:"Sanjeev",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username }, welcome to website`);
        console.log(this);
    }


}
// user.welcomeMessage();
// user.username="Sam";
// user.welcomeMessage()


// console.log(this); // o/p:- {} means that "this" gives the empty object without putting at anything i.e object and function.

// ************************************************  "this" inside the function    ************************************************************************************************
// function chai(){
//     let username="Sanjeev"
//     console.log(this.username);   // o/p:-undefined b/c we can't use "this" inside the function but, we can use it inside the object.
//     // console.log(this);
// }
// chai();
// ****************************************** arrow function ****************************************************
const chai= () =>{
    let username="Sanjeev"
    console.log(this); 

}
chai();// o/p:-{}, it fetch from arrow function.

// ************************************** pure arrow function ***********************


// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4)); // o/p:-7.

// ************************************************** implicit return ***************************************

// const addTwo=(num1,num2)=>  (num1+num2); // use parenthesis and not use the return keyword.


// const addTwo = (num1, num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"Saneev"})


console.log(addTwo(7,8)); // o/p:-15.

// *********************************************  moreover  ************************************

// this  is the globel Object. 

