//---------this for loop finds if number is even and decrements by 5-------
for (let i = 100; i > 0; i -= 5){
        console.log(i)
}


// // this loop generates a random number and returns if the number is odd or even
// for(let i = 0; i < 10; i++){
//     let random = Math.floor(Math.random() * 200-20)+1 + 20
//     if (random % 2 === 0){
//         console.log(random + " is an even number...")
//     }else {
//         console.log(random + " is an odd number...")
//     }
// }


// //-----------shows the multiplication table based on user input from 1-10----------
// function showMultiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = "+ num * i)
//     }
// }
//
// console.log(showMultiplicationTable(7))



// // --------repeats string------
// for (let i = 0; i < 10; i++){
//     console.log(i.toString().repeat(i))
// }