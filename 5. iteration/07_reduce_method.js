// ******************************************************* reduce method (M-I) ******************************************************************
// acc:- accumulator
// currval:- current value

const myNums=[1,2,3]

const mytotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and  currval: ${currval}`);
    return acc+currval;
},0 )

 /* o/p:
acc: 0 and  currval: 1
acc: 1 and  currval: 2
acc: 3 and  currval: 3
*/

console.log(mytotal); // o/p:-6

// ******************************************************* reduce method and arrow function (M-II) ******************************************************************

const mytotal2= myNums.reduce( (acc,currval)=> acc+currval,0)
console.log(mytotal2); // o/p:-6.


const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'py course',
        price:2100
    },
    {
        itemName:'c++ course',
        price:799
    },
    {
        itemName:'js course',
        price:2999
    },
   

]

const priceToPay= shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);  //o/p:- 8897.
