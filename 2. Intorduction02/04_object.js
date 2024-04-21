// singleton

// const tinderUser=new Object() //this is  singleton object and it's o/p:-{}

const tinderUser={}  // this is non-singleton object and  it's o/p:-{}

tinderUser.id="123abc"
tinderUser.name="Sanjeev"
tinderUser.isLoggedIn=false;


// console.log(tinderUser);
// +++++++++++++++++++++++++++++++++++++++ nested object ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const regularUser={
    emal:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sanjeev",
            lastname: "Suman"
        }
    }
}
console.log(regularUser.fullname);  // o/p:- { userfullname: { firstname: 'Sanjeev', lastname: 'Suman' } }
console.log(regularUser.fullname.userfullname);  //o/p:- { firstname: 'Sanjeev', lastname: 'Suman' }
console.log(regularUser.fullname.userfullname.firstname);  //o/p:- Sanjeev

// +++++++++++++++++++++++++++++++++++++ multiple object assign in single object      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}
console.log(obj3);  //o/p:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4= Object.assign( {},obj1,obj2)
console.log(obj4);    // o/p:- { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//++++++++++++++++++++++++++++++++++  spreading the object +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj5={...obj1,...obj2}
console.log(obj5); // o/p:- { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// +++++++++++++++++++++++++++++++++++++ object in an array  +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const users=[
    {
        // id=1,
        // email="h@gmail.com"
    },
    {
        ...obj2 
    },

    {
        ...obj1
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // o/p:- [ 'id', 'name', 'isLoggedIn' ] 
console.log(Object.values(tinderUser));   // o/p:- [ '123abc', 'Sanjeev', false ]
console.log(Object.entries(tinderUser));   // o/p:- [ [ 'id', '123abc' ], [ 'name', 'Sanjeev' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p:- true
console.log(tinderUser.hasOwnProperty('isLogged')); // o/p:- false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ De-structuring the object  +++++++++++++++++++++++++++++++++++

const course={
    courseName:"js in Hindi",
    price: "999",
    courseInstructor:"Sanjeev"
}

// course.courseInstructor
const {courseInstructor}=course
const {courseInstructor: instructor} =course;
console.log(courseInstructor);   //o/p:- Sanjeev
console.log(instructor);    // o/p:- Sanjeev

//++++++++++++++++++++++++++++++++++++  object in json form  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ it is used in API.
// {
//     name:"Sanjeev",
//     "courseName": "js in hindi",

// }
// +++++++++++++++++++++++++++++++++++++++++ within the array json object ++++++++++++++++++++++++++++++++++++++++++++++++++ it is used in API.
// [
//     {},
//     {},
//     {}

// ]
