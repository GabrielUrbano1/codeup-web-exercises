// this function declares a random number
function randomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}
// this is my initially empty array
    const randNumArr3 = []

// this pushes the 2 randomly generated numbers into my empty array
    randNumArr3.push(randomNumber(),randomNumber())

// this logs my numbers
    console.log(randNumArr3)


    // this function adds the 2 random numbers
    function add (...args){
        let total = 0;
        for (let i = 0; i < args.length; i++){
            total += args[i];
        }
        return total;
    }

    // this logs the sum of the 2 numbers
    console.log(add(...randNumArr3))



// const callFunction = (func, n) => {
//     for (let i = 1; i <= n; i++) {
//     }
// }
//
//
// callFunction(randomNumber(), 6)
//
// console.log(callFunction())