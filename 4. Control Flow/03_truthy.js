const userEmail="San@one.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont's have user email");

}

/* 
 falsy values:- false,0,-0,bigInt 0n, "",null,undefined,Nan. // expect it all are truthy values

 truthy values:- "0",'false'," ",[],{},function(){},

*/

if(userEmail.length==0){
    console.log("Array is empty");
}


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
   
}