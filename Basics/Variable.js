const accountID = 14567;
let accountPassword = "Fg123";
let accountEmail = "ghty@gmail.com";
let accountCity = "Bengaluru";

console.log(accountID);

accountEmail = "newemail@gmail.com";
accountPassword = "fgrt123";
// accountID = 23456; ❌ (Not allowed, since it's const)

console.table([accountEmail, accountCity, accountPassword, accountID]);



let name = "Anup"
console.log(name)

var city = "Bengaluru"
console.log(city)

var city1 = "Mumbai"
city1 = "Bnegaluru"
console.log(city1)

let age = 26
console.log(age)

let ageboy = 24
ageboy = 26
console.log(ageboy)

const country = "India";
// country = "USA"; ❌ Error: Assignment to constant variable
console.log(country);


/*
Prefer not to use var
because in issue of block scope and  functional scope
*/

