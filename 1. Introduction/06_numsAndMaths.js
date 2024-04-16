const score=400;
const balance= new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=23.8995;
console.log(otherNumber.toPrecision(3));

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));




// ++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(9.2));
console.log(Math.min(9.2));
console.log(Math.max(9.2));
console.log(Math.floor(Math.random(9.2)));


const min=10;
const max=20;


console.log(Math.random()*(max-min+1)+min); 
// we just want to range the number b/w max & min value that's why we apply the 
//  (max-min+1). that's all.











