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


