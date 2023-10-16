// function capitalizeFirstLetter(input) => input.indexOf(0).toUpperCase;
//
//
// console.log(capitalizeFirstLetter("this is a string"))


const capitalizeFirstLetter = (input) => input.toUpperCase().charAt(0)  + input.slice(1);

console.log(capitalizeFirstLetter("codeup"))


// function capitalizeFirstLetter(input) {
//     return input.charAt(0).toUpperCase() + input.slice(1)
// }
//
//
// console.log(capitalizeFirstLetter("hello codeup"))