// fetch('https://something.com').then().catch().finally();


// M-I:-
const promiseOne = new Promise((resolve, reject){
    // Do an async task
    // DB calls, cryptography, network.
    setTimeout(function(){
        console.log('Async task is complete'); /*o/p:-Async task is compelete */
        resolve() /* o/p:- promise consumed */
    },1000)
});
 
promiseOne.then(function(){
    console.log("Promise consumed");
}) // '.then()' has a direct connection with resolve.

// M-II:-
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2"); /*o/p:- Async task 2 */
        resolve() /*o/p:- Async 2 resolved */
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// M-III:-
const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username:"Sanjeev", email:"one@example.com" })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// M-IV:-
const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
          let error=false;// true for error here.
          if(!error){
            resolve({username:"Sanjeev", password:"@123"})
          }else{
            reject('ERROR: Something went wrong')
          }
    },1000)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected.");
})


// M-V:-
const promiseFive=new Promise(function(resolve,reject){
   setTimeout(function(){
          let error=false;// true for error here.
          if(!error){
            resolve({username:"javascript", password:"@123"})
          }else{
            reject('ERROR: JS went wrong')
          }
    },1000) ;
});


async function consumePromiseFive(){
    try{
     const response= await promiseFive // focus on await and async.
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
 consumePromiseFive()


// console.log(username); /* aese to nhi ho rhaa hai, ye error dega. */