"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */
const names = ['jane', 'jeff', 'john', 'jake']
/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */
console.log(names.length)
/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */
for (let i = 0; i < names.length; i++) {
    console.log("My friends names are " + names[i]);
}
/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */
names.forEach(names => console.log(`My friends names are ${names}`))
/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */
// calls the first number of an array
const numbers = ['1', '2', '3', '4', '5']

function first() {
    return numbers[0]
}


//calls the second number of an array
function second() {
    return numbers[1]
}

//calls the last number of the array
function last() {
    return numbers[numbers.length - 1]
}

//
//
// this function combines the output of the above 3 functions into one
function send() {
    for (let num of numbers) {
        if (num !== numbers[2] && num !== numbers[3]) {
            console.log(num)
        }

    }
}

console.log(first(), second(), last())
//
//
console.log(send())