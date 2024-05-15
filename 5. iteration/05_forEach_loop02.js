// ************************************************************ return values of forEach loop *****************************************

const coding=["js","ruby","java","python","cpp"]

const values= coding.forEach( (item) => {
    console.log(item);
    // return item // it also give o/p undefined.
})

console.log(values); // o/p:- undefined
/* o/p:- (but o/p of console.log(item) is )
js
ruby
java
python
cpp
*/

// **********************************************************************************************************************************
const nuNums=[1,2,3,4,5,6,7,8,9,10]

// M-I
// const newNums=nuNums.filter( (num)=> num>4 )

// M-II :- whenever we use scope,we must have to write return 
const newNums=nuNums.filter((num)=>{
    return num >4
})
console.log(newNums); // o/p:- [ 5, 6, 7, 8, 9, 10 ]; means that filterCallBack function give return alike forEach function.


// ***************************************************************************************************************************************


