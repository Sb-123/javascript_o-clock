const user = {
  username: "Sanjeev",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details form database");
    // console.log(`Username: ${this.username}`);
    console.log(this); // give the whole object details.
  },
};

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this); // o/p:- {}

// ********************************** constructor function *********************************************

// const promiseOne =new Promise()
// const date= new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  //   return this; // it's the optional if you not mention it, it also give the details of this object.
  //   mean it default give the return.
}

const userOne = new User("Sanjeev", 12, true);

const userTwo = new User("Tea o'clock", 11, false);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

// new :- give me the new stance, not the old one.

// new keyword ke kaarn ek constructor call hota hai.
// aur constructor sabhi args & function ko pack krta hai aur de deta hai.
