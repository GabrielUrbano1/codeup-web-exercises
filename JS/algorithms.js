const randomArray = [];
for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random numbers between 1 and 100
    randomArray.push(randomNumber);
}

console.log(randomArray);
//
//
//
// function capLetters(string) {
//     let input = ''
//     for (i = 0; i < string.length; i++) {
//         if (i % 2 === 0) {
//             input += string[i].toUpperCase()
//         }
//         else input += string[i].toLowerCase()
//     }
//     return input
// }
//
// console.log(capLetters("hello my name is jason borne"))
//
//
//
//
// function fibinacci(n) {
//     let fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return `The fibinacci numbers are ${fib}`
// }
//
//
// console.log(fibinacci(10))
//
//
// function binaryCounter(a) {
//     let num = [2, 4]
//     for (let i = 2; i < a; i++) {
//         num[i] = num[i - 1] + num[i - 1]
//     }
//     return `The binary numbers are ${num}`
// }
//
//
// console.log(binaryCounter(10))


// function factorial(f) {
//     let result = 1
//     for (i = 2; i <= f; i++) {
//         result = result * i;
//     }
//     return result
//
// }
//
//
// console.log(factorial(5))


// function primeNumber(p){
//     if(p < 2){
//         return false
//     }
//     for (let i = 2; i < Math.sqrt(p); i++) {
//         if (p%i===0){
//             return false
//         }
//     }
//     return true
// }
//
// console.log(primeNumber(5))
// console.log(primeNumber(10))


// function powerOfTwo(t) {
//     if (t < 1) {
//         return false
//     }
//     while (t > 1) {
//         if (t % 2 !== 0) {
//             return false
//         }
//         t = t / 2
//     }return true
// }
// function isPowerOfTwoBitWise(n) {
//     if (n<1){
//         return false
//     }
//     return (n & (n-1)) === 0
//
// }
// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(2))
// console.log(isPowerOfTwoBitWise(5))
// console.log(powerOfTwo(1))
// console.log(powerOfTwo(2))
// console.log(powerOfTwo(5))


/*
WHAT IS RECURSION
recursion is a problem-solving technique where the solution depends on solutions to smaller instances of the same problem
recursion is a great technique to simplify your solution

EVERY SOLUTION HAS A BASE CASE
MAY SIMPLIFY SOLVING BUT NOT BE FASTER
NOT MOST STRAIGHT FORWARD TO UNDERSTAND

*/


// //RECURSIVE FIBINACCI SEQUENCE
// function recursiveFib(n){
//     if (n < 2){
//         return n
//     }
// return recursiveFib(n-1)+recursiveFib(n-2)
//     }
//
//     console.log(recursiveFib(0))
//     console.log(recursiveFib(1))
//     console.log(recursiveFib(50))


// // RECURSIVE FACTORIAL OF A NUMBER
// function recursiveFactorial(n){
//     if(n===0){
//         return 1
//     }
//     return n *recursiveFactorial(n-1)
//
// }
//
//
// console.log(recursiveFactorial(0))//1
// console.log(recursiveFactorial(1))//1
// console.log(recursiveFactorial(5))///120


// //search algorithms
// let arr = [-5, 2, 10, 4, 6]
// let sortedArr = [-5, 2, 4, 6, 10]

// //LINEAR SEARCH
// function linearSearch(arr, target) {
// // start at first element move towards last
//     for (let i = 0; i < arr.length; i++) {
//         //check if === to target
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     //return -1 if not found
//     return -1
// }
// // this returns the index at which the taget is located if target is not found it will return -1
// console.log(linearSearch(arr, 10))


// // Binary Search used for sorted arrays
// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
// //     if array is empty return -1
//     while (leftIndex <= rightIndex) {
//         //     if arr has elements find middle element return the middle element index
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         //     if target is greater than middle search right half
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             //     if target is less than middle elements binary search left half of the array
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch(sortedArr, 6))
// console.log(binarySearch(sortedArr, 10))
// console.log(binarySearch(sortedArr, 1))
// console.log(binarySearch(sortedArr, -5))


// //recursive binary search
//
// function recursiveBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }
//
// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return - 1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//         return search(arr, target, middleIndex + 1, rightIndex)
//     }
//
// }
//
// console.log(recursiveBinarySearch(sortedArr, -5))
// console.log(recursiveBinarySearch(sortedArr, 1))
// console.log(recursiveBinarySearch(sortedArr, 10))


//SORTING ALGORITHMS

//BUBBLE SORT
//POOR SORTING ALGO IN REAL WORLD
// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//
//     return arr; // Return the sorted array
// }
// const sortedArr = bubbleSort(arr);
// console.log(sortedArr); // This will print the sorted array

// INSERTION SORT
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {//creates a loop to traverse the array
//         let numberToInsert = arr[i];//stores element to sort/insert
//         let j = i - 1;//refers to index of sorted element
//
//         while (j >= 0 && arr[j] > numberToInsert) {//condition to see if number is greater than number to insert
//             arr[j + 1] = arr[j];//insures elements greater than elements to insert is greater
//             j = j-1
//         }
//
//         arr[j + 1] = numberToInsert;//inserts number to right if it is greater.
//     }
//     return arr; // Return the sorted array
// }
// Example usage:
const arr = [-5, 3, 1, 4, 2];
// const sortedArr = insertionSort(arr);
// console.log(sortedArr); // This will print the sorted array


// QUICK SORT
// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     // Choose a random pivot index
//     const pivotIndex = Math.floor(Math.random() * arr.length);
//     const pivot = arr[pivotIndex];
//     // Remove the pivot element from the array
//     arr.splice(pivotIndex, 1);
//     const left = [];
//     const right = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(randomArray))
//MERGE SORT

// function mergeSort(arr){
//     if (arr.length < 2){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftarr = arr.slice(0, mid)
//     const rightarr = arr.slice(mid)
//     return merge(mergeSort(leftarr), mergeSort(rightarr))
// }
// function merge(leftarr, rightarr){
//     const sortedArr = []
//     while (leftarr.length && rightarr.length){
//         if (leftarr[0] <= rightarr[0]){
//             sortedArr.push(leftarr.shift())
//         }else {
//             sortedArr.push(rightarr.shift())
//         }
//     }
//    return [...sortedArr, ...leftarr, ...rightarr]
// }
//
// console.log(mergeSort(randomArray))


//cartesian product
// function cartesianProduct(arr1, arr2){
//     const result = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             result.push([arr1[i], arr2[j]])
//         }
//     }
//
//     return result
//
// }
//
// console.log(cartesianProduct(randomArray, randomArray))


//climbing staircase
// function climbingStaircase(n){
//     const noOfWays = [1, 2]
//     for (let i = 2; i < n ; i++) {
//         noOfWays[i] = noOfWays[i-1]+ noOfWays[i-2]
//     }
//     return noOfWays [n -1]
// }
//
// console.log(climbingStaircase(22))

//tower of hanoi

function towerOfHanoi(n, fromRod, toRod, usingRod){
    if (n === 1 ){
        console.log(`Move disc 1 from ${fromRod} to ${toRod}`)
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disc n ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}


towerOfHanoi(3,'a','c','b')