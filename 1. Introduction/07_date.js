let myDate=new Date()
console.log(myDate.toString()); // tue Apr 16 2024 10:45 something like that.
console.log(myDate.toDateString()); // Tue Apr 16 2024
console.log(myDate.toLocaleString()); // 3/25/1999
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
// console.log(myTimeStamp); 
// console.log(myCreatedDate3.getDate()); 
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

// ${newDate.getDate()} and the time.

newDate.toLocaleString('default'  {
    weekday:"long",
})



