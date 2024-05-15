// ***************************************************************** forEach loop **************************************************************************************

const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (item) {
    console.log(item);
 }   )
 /* o/p:-
 js
ruby
java
python
cpp
*/

// ****************************************************** arrow function inside the forEach function **************************************

coding.forEach( (item)=> {
    console.log(item);

})
/*o/p:-
js
ruby
java
python
cpp
*/
// *****************************************************************************************************************************************
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
/*o/p:-
js
ruby
java
python
cpp
*/
// *****************************************************************************************************************************************

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
/* o/p:-
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
// ******************************************************* important case study of forEach loop  **********************************************************************************

// important case study of forEach loop which is used to fetch the object element within array

const myCoding=[
    {
        languageNmae:"javascript",
        languageFileName:"js"
    },
    {
         languageNmae:"java",
        languageFileName:"java"
    },
    {
         languageNmae:"python",
        languageFileName:"py"
    }

]

myCoding.forEach(  (item) => {
    console.log(item.languageNmae);

})
/* o/p:-
javascript
java
python
*/
// ************************************************************************************************************************************************************








