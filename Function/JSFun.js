//Normal Function
function hello(){
    console.log("Hello Anup");
}
hello();

function hii(){
    console.log("Hii Anup");
}
hii();

function sayhii(){
    console.log("Hii Anup Kaise Hoo");
}
sayhii();

function sayhello(){
    for(let i = 1; i<=10;i++){
        console.log("Hello Anup");
    }
}
sayhello();

//Function With Parameters

function greet(name){
    console.log("Hello"+name);
}
greet("Anup");
greet("Rahul");

function college(student) {
    console.log("Hello " + student);
}

college("Abhishek");
college("Abhinandan");


function add(a, b) {
    return a + b;
}
let result = add(5, 7);
console.log(result);   // 12


function multiply(x,y) {
    return x * y;
}
let product = multiply(4,6);
console.log(product);


function sayname(name){
    console.log("My name is " + name);
}
sayname();  //undefined
sayname('Anup');

function addition(number1, number2){
    console.log(number1 + number2);
}
addition(10,20);
addition(5,"a"); // 5a
const result1 = addition(3,4);
console.log(result1);  //undefined because addition function does not return any value

function divide(num1,num2){
    let division = num1 / num2;
    return division
}
const division = divide(20,4);
console.log(division);

