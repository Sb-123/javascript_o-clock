console.log(2>1);


console.log("2" > 1);

console.log(null >0);
console.log(null==0);
console.log(null>=0);
/* o/p:-
false
false
true
*/

// The reason is that an equality check== and comparisons ">","<",">=","<=" work differently.
// Comparisons convert null to a number, treating it as 0.
// that's why (3) null >= 0 is true and (1) null > 0 is false.


console.log(undefined>0); // always give the false result.
console.log(undefined==0); // always give the false result.
console.log(undefined>=0); // always give the false result.


//=== 
console.log("2"===2);// check strictly 
console.log("2"==2);




