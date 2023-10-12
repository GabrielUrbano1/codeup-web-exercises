let a = 1;
//3
let b = a++;
//1
let c = ++a;
//3
// what is the value of a, b, and c?
let d = "hello";
//hello
let e = false;
//false

d++;
//NaN
e++;
//0
let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//undefined
let price = 2.7;
price.toFixed(2);
//2.70
let price = "2.7";
price.toFixed(2);
//undefined, error

// to convert us parsefloat(price).toFixed(2)
isNaN(0)
// false

isNaN(1)
//false

isNaN("")
//false

isNaN("string")
// true

isNaN("0")
// false

isNaN("1")
//false

isNaN("3.145")
// false

isNaN(Number.MAX_VALUE)
//false

isNaN(Infinity)
//false

isNaN("true")
// true

isNaN(true)
// false

isNaN("false")
//true

isNaN(false)
// false

// to illustrate why the isNaN() function is needed:
NaN == NaN //false
!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true

let sample = "Hello Codeup";

console.log(sample.length)
console.log(sample.toUpperCase())
console.log(sample.toLowerCase())

let conc = sample + "Students"
console.log(conc.indexOf('c'))
console.log(conc.indexOf('C'))
console.log(conc.indexOf('Codeup'))
console.log(conc.substring(6, 12))


let movies = 3
//this is the base number for the daily rental rate
let days = prompt("input combined days all movies were rented")
//adds an on-screen prompt for the user to input the combined number of days all movies have been rented
let total = (movies * days)
//combines the totals
console.log(`The total amount is $${total}`)
//displays for the user to see the total amount the movies will cost.


let google = 400
let amazon = 380
let facebook = 350
let gh = 6
let fh = 10
let ah = 4

let total = (google * gh)+(amazon * ah)+(facebook * fh)
console.log(`The total weekly pay is $${total}`);


let username = 'codeup';
let password = 'notastrongpassword';
// let length = true
// let pass = true
// let user = true
// let userpass = true

let check5Char = password.length >= 5;
let checkuser = password !== username;
let userlength = username.length <= 20;
let userSpace = username.trim() == username
let passspace = password.trim() == password


console.log(check5Char)
console.log(checkuser)
console.log(userlength)
console.log(userSpace)
console.log(passspace)