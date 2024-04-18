// Singleton
// Object.create //  it is the constructor method.

// object literals

const mySym=Symbol("key1")  // symbol is decleared is way.


const JsUser={ 
    name:"Sanjeev",
    "full name" : "Sanjeev Suman",
    [mySym]:"mykey1",         // 
    age:18,
    location: "Jaipur",
    "email" : "sanjeev@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
/*
console.log(JsUser.email);   // its the method to access the object's value.(M-I)
console.log(JsUser["email"]); // it is the  2nd method to access the object's value.(M-II)
// console.log(JsUser."full name"); // it's the wrong method to access the object's value.
console.log(JsUser["full name"]); // now it's fine to access the value.
console.log(JsUser[mySym]);
*/


JsUser.email="Sanjeev@chatgpt.com" // re_assign the object's value means that change the value.
Object.freeze(JsUser)              // it is the way to freeze the object value to change.
JsUser.email="Sanjeev@microsoft.come"
console.log(JsUser); // output is still be "Sanjeev@chatgpt.com" b/c object is freezed.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
JsUser.greeting= function(){
    console.log("Hello Js user");

}

console.log(JsUser.greeting);   // o/p:- undefined