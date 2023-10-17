"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
function analyzeColor(color) {
     let analyzecolor = color
    // function analyzeColor(color) {
    //  let analyzecolor = color
    if (analyzecolor == "red"){
        return "red is the color of roses"
    }
    else if (analyzecolor == "blue"){
        return "blue is the color of the sky"
    }
    else if (analyzecolor == "yellow"){
        return "yellow is the color of sunflowers"
    }
    else if (analyzecolor == "orange"){
        return "orange is the color of oranges"
    }
    else if (analyzecolor == "green"){
        return "green is the color of grass"
    }
    else if (analyzecolor == "indigo"){
        return "indigo is the color of some grapes"
    }
    else if (analyzecolor == "violet"){
        return "violet is the color of eggplant"
    }
    else {
        return "I don't know anything about " + analyzecolor
    }

}







// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch (randomColor) {
//     case 'Red' :
//         console.log("red is for roses");
//         break;
//     case "orange":
//         console.log("orange is for oranges");
//         break;
//     case "yellow":
//         console.log("yellow is for daisy's")
//         break;
//     case "green":
//         console.log("green is for grass");
//         break;
//     case "blue":
//         console.log("blue is for the sky");
//         break;
//     case "violet":
//         console.log("Purple is the color of some grapes")
//     case "indigo":
//         console.log("I do not know anything by that color");
//         break;
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// function analyzeColor(color) {
//     let analyzecolor = color
//     // function analyzeColor(color) {
//     //  let analyzecolor = color
//     if (analyzecolor == "red"){
//         return alert("red is the color of roses")
//     }
//     else if (analyzecolor == "blue"){
//         return alert("blue is the color of the sky")
//     }
//     else if (analyzecolor == "yellow"){
//         return alert("yellow is the color of sunflowers")
//     }
//     else if (analyzecolor == "orange"){
//         return alert("orange is the color of oranges")
//     }
//     else if (analyzecolor == "green"){
//         return alert("green is the color of grass")
//     }
//     else if (analyzecolor == "indigo"){
//         return alert("indigo is the color of some grapes")
//     }
//     else if (analyzecolor == "violet"){
//         return alert("violet is the color of eggplant")
//     }
//     else {
//         return alert("I don't know anything about " + analyzecolor)
//     }
//
// }



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount * 0.9;
//         case 2:
//             return totalAmount * 0.75;
//         case 3:
//             return totalAmount * 0.65;
//         case 4:
//             return totalAmount * 0.5;
//         case 5:
//             return 0;
//         default:
//             return totalAmount;
//     }
// }
//
// console.log(calculateTotal(2,10))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("what is your total bill?")
// console.log(alert(calculateTotal(luckyNumber, totalBill)))


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// let input = confirm("Would you like to pick a number?")



// //finds if the number is odd or even
// function isOddOrEven(number) {
//     let input = parseInt(prompt("input a number"))
//     if (input % 2 === 0){
//         return alert("This is an even number")
//     }
//     else if (input % 2 !== 0) {
//         return alert("This is an odd number")
//     }
//     else{
//         return alert("this number is neither odd nor even")
//     }
// }
//
//
//
//
//
// //adds 100 to the given number
// function plus100(number) {
//     let input = parseInt(prompt("input a number"))
//     let maths= input + 100
//     alert(maths)
// }
//
//
//
//
// // finds if the number is negative or positive
// function negOrPos() {
//     let input = parseFloat(prompt("Enter a number"));
//     if (isNaN(input)) {
//         alert("Invalid input. Please enter a valid number.");
//     } else if (input > 0) {
//         alert("This is a Positive number");
//     } else if (input < 0) {
//         alert("This is a negative number");
//     } else {
//         alert("This number is 0");
//     }
// }
function confirmUserInput(input){
    let userInput = confirm("would you like to pick a number?")
    if (userInput == 1){
        return prompt("Input a number")
    }
    else if (userInput == 0); {
    }
}

console.log(confirmUserInput())