const name ="Sanjeev"
const repoCount=50;
console.log(name+repoCount+" value") // Sanjeev50 value

console.log(`Hello my name is ${name} and my repoCount is ${ repoCount}`);  //Hello my name is Sanjeev and my repoCount is 50

const gameName= new String('Sanjeev')

console.log(gameName[0]); // S
console.log(gameName.__proto__);  // {}



console.log(gameName.length); //7
console.log(gameName.toUpperCase());// SANJEEV
console.log(gameName.charAt(4)); //e
console.log(gameName.indexOf('j'));//3

// homeWork:-
// Search out the all string function and  read all its works.



const newString =gameName.substring(0,4)
console.log(newString);//Sanj

const anotherString=gameName.slice(-8,4)    // slice function
console.log(anotherString);//Sanj


const newStringOne="    Sanjeev    ";
console.log(newStringOne); // o/p:-   "    Sanjeev    "
console.log(newStringOne.trim()); // o/p:- "Sanjeev" // trim function and there are 2 type. one is start_trim and end_trim.

const url="google.com"
console.log(url.replace('%20', '-')); //

console.log(url.includes('sundar'));  // false

console.log(gameName.split('-'));// [ 'Sanjeev']
 







