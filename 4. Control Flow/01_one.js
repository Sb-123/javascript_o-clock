// if condition study.

const isUserloggedIn=true;
const temperature=41;


if(temperature<40){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}

// if(isUserloggedIn){
     
// }


if(2=="2"){
    console.log("executed");
}

const score=200;
if(score>100){
    const power="fly"
    console.log(`User power :${power}`);
}

// ****************************** shorthand notation ************************************************
const balance=10000;

//  if(balance>500)console.log("test"), console.log("test2"); // but it's not the right way to write the code.

//  if(balance<500){
//     console.log("less than");
//  }else if(balance<750){
//     console.log("less than 750");
//  }else if(balance<900){
//     console.log("less than 900");
//  }else{
//     console.log("less than 1200");
//  }




const userLoggedIn=true;
const debitCard=true;
const loggedInFromEmail= true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy the course");

}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
