const score=400;
const balance= new Number(100)
console.log(balance);
/* o/p:- 
[Number:100]
*/

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));
/*o/p:-
100
3
100.0
*/

const otherNumber=23.8995;
console.log(otherNumber.toPrecision(3));
/*o/p:-
23.9
*/

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));
/* o/p:-
10,00,000
*/




// ++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(9.2));
console.log(Math.min(9.2));
console.log(Math.max(9.2));
console.log(Math.floor(Math.random(9.2)));
/*
o/p:-
Object [Math] {}
4
5
5
9
9.2
9.2
0
*/


const min=10;
const max=20;


console.log(Math.random()*(max-min+1)+min); 
// we just want to range the number b/w max & min value that's why we apply the 
//  (max-min+1). that's all.











