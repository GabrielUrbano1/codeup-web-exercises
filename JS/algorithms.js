// const randomArray = [];
// for (let i = 0; i < 20; i++) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random numbers between 1 and 100
//     randomArray.push(randomNumber);
// }
//
// console.log(randomArray);
// console.log(randomArray.length)
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
//var fibGenerator = function*() {
//     let a = 0, b = 1;
//     while(true) {
//         yield a;
//         b = a + b;
//         a = b - a;
//     }
// };
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
WHAT IS RECURSION is a problem-solving technique where the solution depends on solutions to smaller instances of the same problem
recursion is a great technique to simplify your solution

EVERY SOLUTION HAS A BASE CASE
MAY SIMPLIFY SOLVING BUT NOT BE FASTER
NOT MOST STRAIGHT FORWARD TO UNDERSTAND

*/


// //RECURSIVE FIBINACCI SEQUENCE
function recursiveFib(n){
    if (n < 2){
        return n
    }
return recursiveFib(n-1)+recursiveFib(n-2)
    }

    console.log(recursiveFib(0))
    console.log(recursiveFib(1))
    console.log(recursiveFib(20))


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
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {//creates a loop to traverse the array
        let numberToInsert = arr[i];//stores element to sort/insert
        let j = i - 1;//refers to index of sorted element

        while (j >= 0 && arr[j] > numberToInsert) {//condition to see if number is greater than number to insert
            arr[j + 1] = arr[j];//insures elements greater than elements to insert is greater
            j = j-1
        }

        arr[j + 1] = numberToInsert;//inserts number to right if it is greater.
    }
    return arr; // Return the sorted array
}
// Example usage:
const arr = [-5, 3, 1, 4, 2];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // This will print the sorted array


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

// function towerOfHanoi(n, fromRod, toRod, usingRod){
//     if (n === 1 ){
//         console.log(`Move disc 1 from ${fromRod} to ${toRod}`)
//     }
//     towerOfHanoi(n-1, fromRod, usingRod, toRod)
//     console.log(`Move disc n ${fromRod} to ${toRod}`)
//     towerOfHanoi(n-1, usingRod, toRod, fromRod)
// }
//
//
// towerOfHanoi(3,'a','c','b')

/*
---ALGORITHM TECHNIQUES---
BRUTE FORCE EX. LINEAR SEARCH
GREEDY APPROACH EX. DIJKSTRA'S PRIM'S, AND KRUSKAL'S ALGORITHM
DIVIDE AND CONQUER EX. BINARY SEARCH, QUICK SORT, MERG SORT, AND TOWER OF HANOI
DYNAMIC PROGRAMMING EX. FIBONACCI, AND CLIMBING STAIRCASE
BACKTRACKING EX. N-QUEENS PROBLEM


WHAT IS A DATA STRUCTURE? A WAY TO STORE DATA VALUES AND THE RELATIONSHIPS AMONG THEM THE FUNCTIONS THAT CAN BE APPLIED TO THAT DATA

DOM IS TREE DATA STRUCTURE
BROWSER BACK AND FORWARD IS STACK DATA STRUCTURE
OS JOB SCHEDULING IS QUEUE DATA STRUCTURE

BUILT IN STRUCTURES
-ARRAYS
-OBJECTS
-SETS
-MAPS

CUSTOM DATA STRUCTURES
-STACKS
-QUEUES
-CIRCULAR QUEUES
-LINKED LISTS
-HASH TABLES
-TREES
-GRAPHS

---ARRAY---
CAN HOLD A COLLECTION OF VALUES
CAN CONTAIN MIX OF DIFFERENT DATA TYPES
THEY ARE RESIZABLE DECLARING A SIZE NOT NEEDED
ARRAYS ARE ZERO INDEXED AND ARE INSERTION ORDERED AND SO ON
ARRAY ARE ITERABLE AND CAN BE USED WITH FOR LOOP

---EXAMPLES---
TO CREATE AN ARRAY USE SQUARE BRACKETS [1, 2, 3, "STRING]
console.log(arr[0])
for(const item of arr){
    console.log(item)
}
length: The length property of an array returns the number of elements in the array. For example:

toString(): The toString() method converts an array to a string and returns a comma-separated string representation of the array's elements. For example:

pop(): The pop() method removes and returns the last element from an array. For example:

push(): The push() method adds one or more elements to the end of an array and returns the new length of the array. For example:

shift(): The shift() method removes and returns the first element from an array. For example:

unshift(): The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. For example:

join(): The join() method creates and returns a new string by concatenating all the elements in an array using a specified separator. For example:

delete(): There is no delete() method for arrays. To remove an element from an array, you can use the splice() method.

concat(): The concat() method combines two or more arrays and returns a new array that includes the elements from all the arrays. For example:

flat(): The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It is useful for
flattening nested arrays.

splice(): The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements. It takes in various arguments to specify what should be done with the array's elements.

slice(): The slice() method returns a shallow copy of a portion of an array into a new array object selected from a start and end index. It does not modify the original array.

These methods are often used with callback functions to perform operations on arrays and create new arrays based on certain criteria.

map(): The map() method creates a new array by applying a provided function to every element in the calling array. It returns a new array with the results of the function applied to each element.

filter(): The filter() method creates a new array with all elements that pass a test implemented by the provided function. It returns an array of elements for which the callback function returns true.

reduce(): The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It is often used for summing or aggregating values in an array.

concat(): As mentioned earlier, the concat() method is used to concatenate multiple arrays into a single new array.

slice(): The slice() method, when used with specific start and end indices, creates a new array containing a subset of elements from the original array.

splice(): The splice() method, while mainly used for modifying an array in place, can also be used to extract elements from an array or insert new elements into it.

ARRAY BIG-O TIME COMPLEXITY
INSERT OR REMOVE FORM END TIME IS CONSTANT O(1)
INSERT OR REMOVE FROM BEGINNING TIME IS LINEAR DUE TO RESETTING INDEX O(N)
ACCESS - O(N)
SEARCH - O(N)

SHIFT/UNSHIFT/CONCAT/SLICE/SPLICE - O(N)
FOREACH/MAP/FILTER/REDUCE - O(N)



---OBJECTS DATA STRUCTURES---

CHARACTERISTICS
UNORDERED COLLECTION OF KEY-VALUE PAIRS KEY MUST EITHER BE STRING OR SYMBOL DATA
TO RETRIEVE YOU MUST USE CORRESPONDING KEY
CAN NOT USE FOR OF LOOP

---EXAMPLE---
const obj = {
    name: "bruce",
    age: 25
    "key-three": true
    sayMyName: function(){
    console.log(this.name)
}
obj.hobby = "football"
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj["key-three"])
console.log(obj)
obj.sayMyName()

---METHODS---

.keys(): The .keys() method is used to extract the keys (property names) of an object and return them as an iterable object (an iterator). It is commonly used with objects and Map objects. Example usage:

const obj = { name: 'John', age: 30 };
const keys = Object.keys(obj);
console.log(keys); // ['name', 'age']
In this example, Object.keys(obj) returns an array containing the keys of the obj object.

.values(): The .values() method is used to extract the values of an object and return them as an iterable object. Like .keys(), it is commonly used with objects and Map objects. Example usage:

const obj = { name: 'John', age: 30 };
const values = Object.values(obj);
console.log(values); // ['John', 30]
In this example, Object.values(obj) returns an array containing the values of the obj object.

.entries(): The .entries() method is used to extract both keys and values of an object as key-value pairs and return them as an iterable object. It is also commonly used with objects and Map objects. Example usage:

const obj = { name: 'John', age: 30 };
const entries = Object.entries(obj);
console.log(entries); // [['name', 'John'], ['age', 30]]
In this example, Object.entries(obj) returns an array of key-value pairs, where each pair is represented as an array.


---OBJECTS TIME COMPLEXITY---

INSERT/REMOVE TIME IS CONSTANT O(1)
ACCESS TIME IS CONSTANT O(1)
SEARCH TIME COMPLEXITY IS LINEAR DUE TO POTENTIALLY SEARCHING ALL O(N)
.KEYS/.VALUES/.ENTRIES IS ALL LINEAR O(N)

---SET DATA STRUCTURES---
A SET IS A DATA STRUCTURE THAT CAN HOLD A UNIQUE COLLECTION OF VALUES AND CAN STORE DIFFERENT DATA TYPES
SETS ARE DYNAMICALLY SIZED
SETS DO NOT MAINTAIN INSERTION ORDER
SETS ARE ITERABLE WITH FOR OF LOOPS

SETS CANNOT CONTAIN DUPLICATE VALUES
SEARCHING AND DELETING IN SETS IS FASTER OVER ARRAYS


---EXAMPLE---
const set = new Set([1, 2, 3])
set.add(4)
// set.add(4) this will be ignored due to it being duplicated

for (const item of set)
    console.log(item)
set.delete(3)
console.log(set.has(4))
console.log(set.size)
set.clear() will clear the values

---MAP DATA STRUCTURE---
MAP IS AN UNORDERED COLLECTION OF KEY VALUE PAIRS BOTH KEYS AND VALUES CAN BE OF ANY DATA TYOE
TO RETRIEVE A VALUE YOU CAN USE THE CORRESPONDING KEY
MAPS ARE ITERABLE THEY CAN USE FOR OF LOOPS

OBJECT VS MAP
MAPS ARE ORDERED WHILE OBJECTS ARE NOT
MAPS CAN BE OF ANY DATA TYPE WHILE OBJECT CAN NOT
APART FROM STORING DATA OU CAN ATTACH FUNCTIONALLY TO OBJECT WHILE MAPS ARE FOR STORING DATA


EXAMPLES---

const map = new Map(["a", 1], ["b", 2])

// add new value
map.set("c", 3)


for(const [key.value] of map) {
    console.log(`${key}: ${value}`)
]
// check if key exist in map
console.log(map.has("a"))
map.delete("c")
//  check number of key value pairs
console.log(map.size)
// delete all key value pairs
map.clear()

--- STACK DATA STRUCTURE---
SEQUENTIAL COLLECTION OF ELEMENTS THAT FOLLOWS LAST IN FIRST OUT
LAST IN WILL BE FIRST OUT
THINK OF THIS AS STACKED PLATES

STACK SUPPORTS PUSH() AND POP()

---EXAMPLES---
BROWSER HISTORY TRACKING
UNDO OPERATION
EXPRESSION CONVERSIONS
CALL STACK IN JAVASCRIPT RUNTIME


---IMPLEMENT STACK DATA STRUCTURE---

---QUEUE DATA STRUCTURE---
FOLLOWS FIFO FIRST IN FIRST OUT
LIKE A QUEUE OF PEOPLE WAITING IN LINE
IS AN ABSTRACT DATA TYPE
ENQUEUE ADDS ELEMENT TO FRONT OF QUEUE
DEQUEUE REMOVES ELEMENT FROM FRONT OF QUEUE

GOOD FOR PROCESSING IN ORDERLY FASHION

A PRINTER
A CPU FOR TASK SCHEDULING
CALLBACK QUEUE IN JAVASCRIPT RUNTIME




*/

// function diagonalDifference(arr) {
//     // Write your code here
//     let d1 = 0, d2 = 0, m = arr[0].length, j = m-1;
//
//     for(let i = 0; i < m; i++){
//         d1 += arr[i][i];
//         d2 += arr[j][i];
//         j--;
//     }
//
//     return  Math.abs(d1 - d2);
//
// }


function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    const positiveProportion = (positiveCount / n).toFixed(6);
    const negativeProportion = (negativeCount / n).toFixed(6);
    const zeroProportion = (zeroCount / n).toFixed(6);

    console.log(positiveProportion);
    console.log(negativeProportion);
    console.log(zeroProportion);
}

// Sample input
// const arrr = [-4, 3, -9, 0, 4, 1];
// plusMinus(arrr);


function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat((n - i));
        let step = '#'.repeat((i));
        console.log(space + step);
    }
}
