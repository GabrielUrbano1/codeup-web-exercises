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
//0? booleans can be numbers?
let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//undefined?
let price = 2.7;
price.toFixed(2);
//2.70
let price = "2.7";
price.toFixed(2);
//undefined
isNaN(0)
// false

isNaN(1)
//false

isNaN("")
//true? or is it  0 then its false

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
// false?

isNaN("false")
//true

isNaN(false)
// false

// to illustrate why the isNaN() function is needed:
NaN == NaN //true
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


//console.log(sample.length)
//12

