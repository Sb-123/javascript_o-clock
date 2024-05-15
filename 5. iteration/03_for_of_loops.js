// ************************************* "for in" loop (it is also a special types and it is different from "for of" loop) ************************************


const myObject={
    js:'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"

}

for(const key in myObject){
    console.log(key);
}
/*o/p:-
js
cpp
rb
swift

 */
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*o/p:-
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
 */

// ****************************************************************** array has also key which is number which is started from 0 *************************************************************************************
const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(key);
}
/*o/p:-
0
1
2
3
4
 */
for(const key in programming){
    console.log(programming[key]);
}
/*o/p:-
js
rb
py
java
cpp
 */
// *******************************************************************************************************************************************************


