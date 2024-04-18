// Singleton
// Object.create // 

// object literals

const mySym=Symbol("key1")


const JsUser={ 
    name:"Sanjeev",
    "full name" : "Sanjeev Suman",
    [mySym]:"mykey1",
    age:18,
    location: "Jaipur",
    "email" : "sanjeev@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."full name"); // it's the wrong method.
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email="Sanjeev@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="Sanjeev@microsoft.come"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello Js user");

// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user, ${this.name}`);

// }

// // console.log(JsUser.greeting); // o/p :- undefined
// console.log(JsUser.greeting());