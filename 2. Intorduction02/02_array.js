const marvel_heros=["thor", "IronMan", "spiderman"]
const dc_heros=['superman', "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // o/p :-[ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //o/p :- flash



// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros)


const all_new_heros=[...marvel_heros, ...dc_heros]   // ...marvel i.e it is the spread operator. it's work is to separate the each elements of an array.
// console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity) // flat function change the above array into a standard array. i.e 
// o/p:-  [ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5 ]
console.log(real_another_array);

console.log(Array.isArray("Sanjeev")) 
console.log(Array.from("Sanjeev"))   // it convert the string into a array.
console.log(Array.from({name:"Sanjeev"}))   //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // o/p:-[100,200,300]








