let name = "Anup" //String
let age = 21; //number
let isStudent = true; //boolean
let x = "10";
console.log([name,age,isStudent,x])
console.table([name,age,isStudent,x])

let a; //undefined
let b = null; //null

let age1 = 25;               // number
let name1 = "Anup";          // string
let isLoggedIn = true;      // boolean
let user;                   // undefined
let car = null;             // null
let id = Symbol("unique");  // symbol
let bigNumber = 12345678901234567890n; // bigint

let person = {
    name : "Anup",
    age : 21,
    isStudent : true,
}

let subjects = ["Math","Science","English"];

function greet() {
    console.log("Welcome " + person.name);
}
console.log(typeof 10);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"  ❗ (known JS bug)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 123n);       // "bigint"

console.log(typeof NaN);

let data = 10;
data = 'anup';
data = true;

let x1;
console.log(x1); // logs "undefined"

console.log(x); // ReferenceError
const x2 = 3;

console.log(y); // ReferenceError
let y = 3;

//Example 1 – Number + String → String

let result = 5 + "10"
console.log(result);
console.log(typeof result);