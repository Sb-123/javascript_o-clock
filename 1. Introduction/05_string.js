const name ="Sanjeev"
const repoCount=50;
console.log(name+repoCount+" value")

console.log(`Hello my name is ${name} and my repoCount is ${ repoCount}`);

const gameName= new String('Sanjeev')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('j'));

// homeWork:-
// Search out the all string function and  read all its works.



const newString =gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)   // slice function
console.log(anotherString);


const newStringOne="    Sanjeev    ";
console.log(newStringOne);
console.log(newStringOne.trim());  // trim function and there are 2 type. one is start_trim and end_trim.

const url="google.com"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
 







