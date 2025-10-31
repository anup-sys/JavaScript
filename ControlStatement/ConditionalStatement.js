//if, else if, else, switch
//Runs a block of code if a condition is true.
//Used for multiple conditions.
//Runs one block if true, another if false.
//Used when there are many conditions on a single variable.
//Used for decision making
let age = 18;
if(age>=18){
    console.log("You can Vote");
}


let age1 = 14;
if(age1>=18){
    console.log("You Can Vote");
}else{
    console.log("You can not Vote");
}


//let marks = 85;
//if(marks>=85){
    //console.log("Grade: "+A)
//}else if (marks>=75){
    //console.log("Grade: "+B)
//}else(marks>=65){  not add any value in else statement
    //console.log("Grade: "+C)
//}

let marks = 85;

if (marks >= 85) {
    console.log("Grade: " + "A");
} else if (marks >= 75) {
    console.log("Grade: " + "B");
} else if (marks >= 65) {
    console.log("Grade: " + "C");
} else {
    console.log("Grade: " + "D");
}

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

let subject = "english";

switch(day){
    case 1 :
        console.log("Math");
        break;
        case 2 :
            console.log("Physics");
            break;
            case 3 :
                console.log("English");
                break;
                default:
                    console.log("Invalid Subject");
}


//Check if a Number is Positive, Negative, or Zero

let num = -5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


let number = 6;
if(number>0){
    console.log("Positive number");
}else if (number < 0) {
    console.log("Negative number");
}else {
    console.log("Zero");
}

//Check if a Number is Even or Odd

let num1 = 7;

if (num1 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//Find the Largest of Three Number

let a = 15, b = 25, c = 20;

if (a > b && a > c) {
    console.log("A is the largest");
} else if (b > a && b > c) {
    console.log("B is the largest");
} else {
    console.log("C is the largest");
}

//Leap Year Checker

let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}


//Check if a Character is a Vowel or Consonant

let ch = 'e';

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
    ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Electricity Bill Calculator

let units = 180;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Total Bill: ₹" + bill);

//Traffic Light Simulator

let signal = "yellow";

if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Get Ready");
} else if (signal === "green") {
    console.log("Go");
} else {
    console.log("Invalid signal color");
}


//Simple Calculator

let number1 = 20;
let number2 = 5;
let operator = "*";

if (operator === "+") {
    console.log(number1 + number2);
} else if (operator === "-") {
    console.log(number1 - number2);
} else if (operator === "*") {
    console.log(number1 * number2);
} else if (operator === "/") {
    console.log(number1 / number2);
} else {
    console.log("Invalid operator");
}


let marks1 = 75;
if(marks>90){
    console.log("Grade: A");
}else if(marks>=75){
    console.log("Grade: B");
}
else {
    console.log("Grade: B");
}

let day1= 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
        break;
        case 3:
            console.log("Wednesday");
            break;
            case 4:
                console.log("Thursday");
                break;
                default:
                    console.log("Hii" + day1);
}

//Ternary Operator (?:)
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(message);



let isLoggedOut = true;
let message1 = isLoggedOut ? "Meet You Again!" : "Office time is over";

console.log(message1);


//Looping Statement
let college = "RajaRajeswari College Of Engineering";

for (let i = 1; i <= 5; i++) {
  console.log(college);
}


let college1 = 'Rv College Of Engineering';

for(let i =1; i<5;i++){
    console.log(college1);
}

//let college2 = 'S N Sinha College'

//for(let i = 2; i<=6; i++){
    //console.log(college2);
//}

let college3 = 'S N Sinha College1'
for(let i = 0; i<=5;i++){
    console.log(college3);
}

//While Loop
//Used when you don't know how many times, but you loop until a condition becomes false.

let i = 1;

while (i <= 5) {
    console.log("Hi");
    i++;
}

let i2 = 1;
while(i2<=5) {
    console.log('Hello');
 i2++;
}


let i3= 1;
while(i3<=5){
    console.log("Hello Kaise Hoo");
    i3++;
}
let i4 = 1;
while(i4<=4){
    console.log("Hi Mai Bhadhiya Huu Tum Kaise Hoo");
    i4++;
}

let i5 = 2;
while(i5<-10){
    console.log("Hey, How are You");   //while(i5 < -10) → this means the loop will run only if i5 is less than -10
    i5++;
}   //The loop never runs  //No Output

//let name = 'Anup';
//while(name<=anup){
    //console.log("Hey Anup Kaise Hoo");
    //name++;
//}

let name = 'Anup';
let count = 1;

while (count <= 5) {
    console.log("Hey " + name + " Kaise Hoo");
    count++;
}



let name1 = 'Anup Kumar Singh';
let count1 = 1;
while(count1 <=5 )  {
    console.log("Hey " + name1 + " How are You");
    count1++;
}


let i1 = 1;

do {
    console.log("Hello");
    i1++;
} while (i1 <= 5);


let i6 = 1;
do{
    console.log("Hello How are You");
    i6++;
}while (i6 <=10);

let i8 = 1;
do {
    console.log("Hello When will come")
    i8++;
}while(i8<+5)  //4 Output


let name3 = "Anup";

for (let char of name3) {
    console.log(char);
}


let name4 = "Shubham";

for(let char of name4) {
    console.log(char);
}


let person = {
    name: "Anup",
    age: 20
};

for (let key in person) {
    console.log(key, person[key]);
}



let person1 = {
    name4:"Shubham",
    age3: 30
};
for(let key in person){
    console.log(key, person[key]);
}



//JavaScript return Statement (With Examples)

function add(a, b) {
    return a + b;   // sends the result back
}

let result = add(5, 3);
console.log(result);


function add(b,c) {
    return b+c;
}

let result_1 = add(10,19);
console.log(result_1);
