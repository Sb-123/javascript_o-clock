// array.

// const myArr0=[0,1,2,3,4,5, true, "Sanjeev"]
const myArr=[0,1,2,3,4,5]

// console.log(myArr[2]);

const myHeors= new Array(1,2,3,4)
// console.log(myArr[1]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++  Array methods   +++++++++++++++++++++++++++++++++++++++++++++

// myArr.push(6)
// console.log(myArr);
// myArr.pop()



// myArr.unshift(9)  // it adds one or more elements to the beginning of an aarray and returns the new length.
                     // myArr.prototype.push() has similar behavior to unshift(), but applied to the end of the array.

 // console.log(myArr);
myArr.shift()   //The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.






// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



const newArr=myArr.join() // it convert the array into a single string.
console.log(myArr);
console.log(newArr)


//+++++++++++++++++++++++++++++++++++ slice, splice +++++++++++++++++++++++++++++++=

console.log("A ", myArr);
const myn1= myArr.slice(1,3) // 

console.log(myn1)
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


// o/p:-
// A  [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]
// B  [ 1, 2, 3, 4, 5 ]
// C  [ 1, 5 ]
// [ 2, 3, 4 ]
// **********************************************************************************.
