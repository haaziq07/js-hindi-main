// primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt;

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);



// Non Premitive
// Array, Object, Function

const heros = ["Spiderman", "Batman", "AntMan", "Hulk"];

let myObj = {
   name: "Abdullah",
   age: 29,   
}

const myFunction = function () {
   console.log("Hello World!");
}


// console.log(typeof heros); Object
// console.log(typeof id); Symbol 
// console.log(typeof myObj); Object 
// console.log(typeof myFunction); function
// console.log(typeof anotherId); Symbol 
// console.log(typeof outsideTemp); null is an object 
// console.log(typeof userEmail); undefined
