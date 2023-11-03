



// FizzBuzz: Write a function that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz(5))
//     Input: 5
// Output: 1, 2, Fizz, 4, Buzz



// Factorial: Write a function to calculate the factorial of a given number. For example, the factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5))
//     Input: 5
// Output: 120



// Palindrome Checker: Create a function that checks if a given string is a palindrome (reads the same forwards and backward). Ignore spaces, punctuation, and capitalization.
//     Input: "racecar"
// Output: true
// Input: "hello"
// Output: false



//     Reverse a String: Write a function that reverses a string without using the built-in reverse() method.
//     Input: "JavaScript"
// Output: "tpircSavaJ"



//     Find the Missing Number: Given an array containing n distinct numbers taken from 0 to n, find the missing number. For example, for the array [3, 0, 1], the missing number is 2.
//     Input: [3, 0, 1]
// Output: 2



// Sum of Two Numbers: Write a function that takes an array of numbers and a target sum. Determine if there are two numbers in the array that add up to the target sum. Return the indices of the two numbers.
//     Input Array: [2, 7, 11, 15], Target Sum: 9
// Output: [0, 1]


//     Remove Duplicates: Create a function that removes duplicate values from an array and returns a new array with unique values.
//     Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]




//     Title Case: Write a function that converts a sentence to title case (the first letter of each word is capitalized).
//     Input: "hello world"
// Output: "Hello World"




// Anagram Checker: Create a function that checks if two given strings are anagrams of each other (they contain the same characters but in a different order).
//     Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false


// Find the Longest Word: Write a function that finds the longest word in a sentence and returns it. If there are multiple words with the same longest length, return the first one.
//     Input: "The quick brown fox"
// Output: "quick"

