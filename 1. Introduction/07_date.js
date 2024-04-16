let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// date is also a object in js.


let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
// 
let myCreatedDate2= new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3= new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);


