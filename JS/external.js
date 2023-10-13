
"use strict";


console.log("Hello from External JavaScript")

alert("Welcome to my website!")
//initial alert message for user interaction
let color = prompt("What is your favorite color")
//prompts user to input a color
alert(`Great! ${color} is my favorite color too!`)
//alerts user that color is also my favorite color...

//----------------part 2-----------------------

let moviescost = parseInt(prompt("What is the daily cost for the movies?"))
//this is the base number for the daily rental rate
let days = parseInt(prompt("What is the combined days all movies were rented"))
//adds an on-screen prompt for the user to input the combined number of days all movies have been rented
let total = (moviescost * days)
//combines the totals
alert(`The total amount is $${total.toFixed(2)}`)
//displays for the user to see the total amount the movies will cost.

//-----------------part 3---------------------

let google = prompt("enter hourly wage for google")
//prompts user for google base pay
let gh = prompt("enter how many hours worked")
//prompts user for google hours worked
let amazon = prompt("enter hourly wage for amazon")
//prompts user for amazon base pay
let ah = prompt("enter how many hours worked")
//prompts user for amazon hours worked
let facebook = prompt("enter hourly wage for facebook")
//prompts user for facebook base pay
let fh = prompt("enter how many hours worked")
//prompts user for hours worked
let totalpay = (google * gh)+(amazon * ah)+(facebook * fh)
//does math things for total pay
alert(`The total pay is $${totalpay.toFixed(2)}`);
//alerts the user what the total pay is