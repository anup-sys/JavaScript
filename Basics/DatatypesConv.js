// Example 1 – Number + String → String    //Implicit Type Conversion (Type Coercion)   //
let result = 5 + "10"
console.log(result);
console.log(typeof result);

let result1 = "10";          //JavaScript automatically converts one data type to another during expression evaluation.
console.log(result1)
console.log(typeof result1)

//Example 2 – String → Number (when using -, *, /)

console.log("10" - 2);
console.log("10"/2);
console.log("10"*2);

console.log(10/2);
console.log(10*2);
console.log(10-2);

//Example 3 – Boolean Conversion

console.log(true + 1);  //true hereis 1
console.log(false + 1); //false here is 0

//Example 4 – Non-Numeric String

console.log("Abc" - 2);

let ABC;
console.log(typeof ABC);


//Explicit Type Conversion (Manual)

//You can manually convert data types using built-in JavaScript functions.

//Convert to String

let num = 100;
console.log(String(num))
console.log(num.toString())

let num1 = 100;

let str = String(num1);
console.log(str);
console.log(typeof str);

let x = 10 + "";
console.log(x);        // "10"
console.log(typeof x); // "string"

let y = true + "";
console.log(y);        // "true"


//Real-Life Example

let age =  25;
let message = "I am " + age  + " Year Old";
console.log(message)


//Convert to number

let str1 = "123";
let num2 = Number(str1);
console.log(num2);        // 123
console.log(typeof num2); // number

console.log(Number("10"))
console.log(typeof Number) //function


console.log(typeof null); //object
console.log(typeof undefined);  //undefined


//Convert to Boolean
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("Hello"));   // true
console.log(Boolean(123));       // true


let value = 3;
let negvalue = -3;
console.log(negvalue);

let str3 = "Anup";
let str4 = " Singh";
str5 = str3+str4;
console.log(str5);
console.log("1"+1);  //11
console.log(1+"1"); //11
console.log("2"+7);
console.log("56"+"56"+8+9);
console.log("2"+"5");
console.log(6*8+4);

console.log(+true);  //1
//console.log(++true)  //error

console.log(+"")  //0

let gameCounter = 100;
gameCounter++;  //101
gameCounter--;  //100
console.log(gameCounter);

let Counter = 25;
++Counter;  //26
--Counter; //25
console.log(Counter);

console.log(1<2)  //true
console.log(1>2)  //false
console.log(1==1) //true
console.log(1<+2)  //true

console.log(1==2) //false

console.log(2 !=1) //true

console.log(1 != 1)  //false

console.log("1" > 1) //false
console.log("1" == 1) //true

console.log(null>0)  //false
console.log(null<0)  //false
console.log(null>=0)  //true

console.log(undefined == 0);  //false
console.log(undefined>0)  //false
console.log(undefined<0)  //false

console.log("2" === 2) //false
console.log(2===2)  //true