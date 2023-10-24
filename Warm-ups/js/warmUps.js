// //Gabriel Urbano
// //Daily warm-ups
//
// let name = "Gabriel Urbano"
// let year = "2014"
//
// console.log(`My name is ${name} and I graduated high school in ${year}`);


// let num = 100
//
//
// while ( num >= 0 ){
//     if (num % 2 === 0 && num !== 0){
//         console.log(num + " is even")
//     } else{
//         console.log(num)
//     }
//     (num -= 5)
// }


// let hello = "hello"
// for(let i = 0; i < hello.length; i++){
//     console.log(hello.charAt(i))
// }


//-------------This loop skips the number the user selects....-------------
// let numberToStopAt = 13
//     // prompt("Pick an odd number");
//
// for (let i = 1; i <= 50; i+=2) {
//     // console.log("Number to skip is " + numberToStopAt )
//     if (i == numberToStopAt) {
//         console.log('Yikes! skipping number ' + numberToStopAt)
//         break;
//     }else {
//         console.log("select an odd number")
//     }
//     console.log('here is an odd number: ' + i);
// }
//


// for (i = 1; i < 50; i +=2){
//     console.log(i);
//     continue;
//
// }

//----------------------10/20/2023---------------------------------
//-----------function logs all numbers that are even from 1-100---------
// function isEven(){
//     for (i = 2; i <= 100; i += 2){
//         console.log(i+ " Is Even")
//     }
// }
//
// isEven()

// //------------------------10/23/23-------------------------------
// const movies = ['Deadpool','300','gladiator','troy','click']
//
// movies.sort()
// function moviesLoop(){
//     movies.forEach(Movies => console.log(`My favorite movies are ${Movies}`))
// }
// moviesLoop()


//---------------------------10/24/2023--------------------------------


let cars = [
    {
        Make: "Honda",
        Model: "Civic",
        Color: "Blue"
    },    {
        Make: "Toyota",
        Model: "Tundra",
        Color: "Red"
    },    {
        Make: "BMW",
        Model: "M5",
        Color: "White"
    }
]

cars.forEach(cars =>{
    console.log(`the car make is ${cars.Make} the model is ${cars.Model} and the color is ${cars.Color}`)

})


for (let car of cars){
    console.log(`the car make is ${car.Make} the model is ${car.Model} and the color is ${car.Color}`)
}