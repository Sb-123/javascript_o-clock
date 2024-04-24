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


console.log(this);
// ************************************************  "this" inside the function    ************************************************************************************************
function chai(){
    let username="Sanjeev"
    console.log(this.username);   // o/p:-undefined b/c we can use "this" inside the function but, we can use it inside the object.
}
chai();
// ******************************************   ****************************************************
