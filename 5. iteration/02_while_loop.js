// ******************************************************  while loop concepts  ***************************************************************************
let index=0;
while (index<=10) {
    console.log(`Value of index is ${index}`);
    index=index+2;
    
}
/* o/p:-
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

// *******************************************************************************************************************************************************



let myArray=["flash","batman","superman"]
let arr=0;
while (arr<myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
    
}

// ************************************************************** do while loop concepts   *****************************************************************************************
let score =1;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10)


/*o/p:-
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10

*/

// ***************************************************************** for of loops (array specific loop) **************************************************************************************


// ["","",""]
// [{},{},{}]

const arr2=[1,2,3,4,5]
for(const num of arr2){
    console.log(num);

}
/*o/p:-
1
2
3
4
5
*/

const greetings="hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
/*o/p:-
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !

*/

// ******************************************************************** maps (it's a type of datatype) ***********************************************************************************

const map =new Map();
map.set("IN", "India")
map.set("USA","United State of America")
map.set("Fr","France")
map.set("IN","India")
// maps takes only unique value.
// aur jis order mai enter kra hai usi order mai rhaa krta hai maps.

console.log(map);
/*o/p:-
  'IN' => 'India',
  'USA' => 'United State of America',
  'Fr' => 'France'
 */

for(const key of map){
    console.log(key);
}
/*o/p:-
[ 'IN', 'India' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ]

*/
for(const [key,value] of map){
    console.log(key, ':-', value);
}
/*o/p:-
IN :- India
USA :- United State of America
Fr :- France
 */

// ************************************************************ 'for of' loops in objects *******************************************************************************************


const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

for(const [key,value] of myObject){
    console.log(key,':-',value);  // o/p:-error b/c objects are not be iteratable like as map.
}

// *******************************************************************************************************************************************************

