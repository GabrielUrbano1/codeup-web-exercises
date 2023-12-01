// // //Gabriel Urbano
// // //Daily warm-ups
// //
// // let name = "Gabriel Urbano"
// // let year = "2014"
// //
// // console.log(`My name is ${name} and I graduated from high school in ${year}`);
//
//
// // let num = 100
// //
// //
// // while ( num >= 0 ){
// //     if (num % 2 === 0 && num !== 0){
// //         console.log(num + " is even")
// //     } else{
// //         console.log(num)
// //     }
// //     (num -= 5)
// // }
//
//
// // let hello = "hello"
// // for(let i = 0; i < hello.length; i++){
// //     console.log(hello.charAt(i))
// // }
//
//
// //-------------This loop skips the number the user selects....-------------
// // let numberToStopAt = 13
// //     // prompt("Pick an odd number");
// //
// // for (let i = 1; i <= 50; i+=2) {
// //     // console.log("Number to skip is " + numberToStopAt )
// //     if (i == numberToStopAt) {
// //         console.log('Yikes! skipping number ' + numberToStopAt)
// //         break;
// //     }else {
// //         console.log("select an odd number")
// //     }
// //     console.log('here is an odd number: ' + i);
// // }
// //
//
//
// // for (i = 1; i < 50; i +=2){
// //     console.log(i);
// //     continue;
// //
// // }
//
// //----------------------10/20/2023---------------------------------
// //-----------function logs all numbers that are even from 1-100---------
// // function isEven(){
// //     for (i = 2; i <= 100; i += 2){
// //         console.log(i+ " Is Even")
// //     }
// // }
// //
// // isEven()
//
// // //------------------------10/23/23-------------------------------
// // const movies = ['Deadpool','300','gladiator','troy','click']
// //
// // movies.sort()
// // function moviesLoop(){
// //     movies.forEach(Movies => console.log(`My favorite movies are ${Movies}`))
// // }
// // moviesLoop()
//
//
// //---------------------------10/24/2023--------------------------------
//
//
// // let cars = [
// //     {
// //         Make: "Honda",
// //         Model: "Civic",
// //         Color: "Blue"
// //     },    {
// //         Make: "Toyota",
// //         Model: "Tundra",
// //         Color: "Red"
// //     },    {
// //         Make: "BMW",
// //         Model: "M5",
// //         Color: "White"
// //     }
// // ]
// //
// // cars.forEach(cars =>{
// //     console.log(`the car make is ${cars.Make} the model is ${cars.Model} and the color is ${cars.Color}`)
// //     }
// // )
// //
// //
// // for (let car of cars){
// //     console.log(`the car make is ${car.Make} the model is ${car.Model} and the color is ${car.Color}`)
// // }
//
//
// //---------------------------11/01/2023--------------------------------
//
// // let developers = [
// //     {
// //         name: "Jonathan",
// //         languages: {
// //             frontend: ["HTML", "JavaScript", "CSS"],
// //             backend: ["Java"]
// //         }
// //     },
// //     {
// //         name: "Bonnie",
// //         languages: {
// //             frontend: ["JavaScript"],
// //             backend: []
// //         }
// //     },
// //     {
// //         name: "Raj",
// //         languages: {
// //             frontend: [],
// //             backend: ["C#", "Java", "Python"]
// //         }
// //     },
// //     {
// //         name: "Carmen",
// //         languages: {
// //             frontend: ["JavaScript", "HTML", "CSS", "React"],
// //             backend: ["C#", "Java", "Python", "TypeScript"]
// //         }
// //     }
// // ]
// //
// //
// //
// //
// // function printName() {
// //     let jsDevs =[];
// //     for (let i = 0; i < developers.length; i++) {
// //         if (developers[i].languages.frontend.includes("JavaScript")) {
// //             jsDevs.push(developers[i].name);
// //         }
// //     }return jsDevs;
// // }
// //
// //
// // console.log(printName())
//
//
// // Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.
//
// // let elements = [
// //     {
// //         el: 'button',
// //         style: {
// //             backgroundColor: "white",
// //             color: "black"
// //         },
// //         content: "Submit"
// //     },
// //     {
// //         el: `p`,
// //         style: {
// //             backgroundColor: "white",
// //             color: "black"
// //         },
// //         content: "Our company is better at doing company things than your company."
// //     },
// //     {
// //         el: `h2`,
// //         style: {
// //             backgroundColor: "white",
// //             color: "black"
// //         },
// //         content: "Welcome Back!"
// //     }
// // ];
//
//
// // function changeStyle(arrOfElements, bgColor, textColor) {
// //     for (let i = 0; i < arrOfElements.length; i++) {
// //         arrOfElements[i].style.backgroundColor = bgColor;
// //         arrOfElements[i].style.color = textColor;
// //     }
// //     return arrOfElements;
// // }
//
//
// // console.log(changeStyle(elements, "red", "black"));
//
// // function fizzBuzz(n) {
// //     for (let i = 1; i <= n; i++) {
// //         if (i % 3 === 0 && i % 5 === 0) {
// //             console.log("FizzBuzz");
// //         } else if (i % 3 === 0) {
// //             console.log("Fizz");
// //         } else if (i % 5 === 0) {
// //             console.log("Buzz");
// //         } else {
// //             console.log(i);
// //         }
// //     }
// // }
// // console.log(fizzBuzz(100))
//
// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');
//
// function addTask() {
//     if (inputBox.value === '') {
//         alert('Please enter a task');
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement('span');
//         span.innerHTML = '\u00d7'
//         li.appendChild(span);
//     }
//     inputBox.value = '';
//     saveData();
// }
//
// listContainer.addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked');
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);
//
// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML);
// }
//
// function showTasks() {
//     listContainer.innerHTML = localStorage.getItem('data');
// }
//
// showTasks();
//
// function updateFontColor() {
//     // Get all elements containing text
//     const textElements = document.querySelectorAll('*:not(script):not(style):not(link):not(meta)'); // Exclude certain elements like scripts, styles, links, and meta tags
//
//     // Loop through the text elements and update font color
//     textElements.forEach(element => {
//         element.style.color = '#c50c0c';
//     });
// }
// mapboxgl.accessToken = MAP_BOX_API_KEY;
//
// // Call the function to update font color
// updateFontColor();
//
// // Select all headings and titles you want to style with Dancing Script
// const headingsAndTitles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .title-class, .other-title-class');
//
// // Apply the "Dancing Script" font to the selected elements
// headingsAndTitles.forEach(element => {
//     element.style.fontFamily = 'Dancing Script, cursive';
// });
//
//
// //warm up to display content form json files
// fetch("data/to-do.json")
//     .then(response => response.json())
//     .then(data => {
//         const jsonClass = document.querySelector(".json")
//         data.forEach(item => {
//             const displayContent = document.createElement("p")
//             displayContent.innerHTML = `
//     <h1>${item.task}</h1>
//     <p>${item.content}</p>
//     <p>${item.date}</p>`
//             jsonClass.appendChild(displayContent)
//         })
//     })



function diagonalDifference(arr){
    let n = arr.length
    let d1 = 0
    let d2 = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(i === j){
                d1 += arr[i][j]
            }
            if (i+j === n - 1){
                d2 += arr[i][j]
            }
        }
    }return Math.abs(d1 +d2)
}

