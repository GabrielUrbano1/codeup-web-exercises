/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
// const person = {
//     firstName: "Gabriel",
//     lastName: "Urbano",
//     age: "27",
//     gender: "Male",
//     ethnicity: "Hispanic"
// }
//
//
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)


/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

// person.sayHello = function (){
//     return (`Hello from ${person.firstName} ${person.lastName}`)
// }
// console.log(person.sayHello())


/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

//  shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];


// declare a for each loop to iterate each name in the array
// shoppers.forEach(function (shopper){
//     //declare the name variable
//     let name = shopper.name
//     //declare the amount before the discount
//     let amountBeforeDiscount = shopper.amount
//     //let the discount equal 0
//     let discount = 0
//     //if statement for if the amount is over 200 apply the discount and let discount = the discounted amount per each name
//     if (amountBeforeDiscount >= 200){
//         discount = amountBeforeDiscount * .12
//     }// else statement for when the name spends less then 200
//     let amountAfterDiscount = amountBeforeDiscount - discount
//         // tie  in all the functions to a log statement
//     console.log(`${name} bought $ ${amountBeforeDiscount.toFixed(2)}, received a $${discount.toFixed(2)} discount, and needs to pay $${amountAfterDiscount.toFixed(2)}`)
// })


/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title)
 * > console.log(books[0].author.firstName)
 * > console.log(books[0].author.lastName)
 */

let books = [
    {
        title: "1984",
        year: "1949",
        author: {
            firstName: "George",
            lastName: "Orwell"

        },

    }, {
        title: "Pride and Prejudice",
        year: "1813",
        author: {
            firstName: "Jane",
            lastName: "Austen"

        }
    }, {
        title: "Harry Potter and the Sorcerer's Stone",
        year: "1997",
        author: {
            firstName: "J.K.",
            lastName: "Rowling"

        }
    }, {
        title: "The Adventures of Huckleberry Finn",
        year: "1884",
        author: {
            firstName: "Mark",
            lastName: "Twain"

        }
    }, {
        title: "To Kill a Mockingbird",
        year: "1960",
        author: {
            firstName: "Harper",
            lastName: "Lee"

        }
    }
]

// console.log(books[0].title)
// console.log(books[0].author.firstName)
// console.log(books[0].author.lastName)

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */


// for(let i = 0; i < books.length; i++){
//     console.log(`Book # ${i + 1}`);
//     console.log(`Title: ${books[i].title}`);
//     console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
//     console.log("---");
// }


// books.forEach(books =>{
//
// })
// for (let i = 0; i < books.length; i++){
//     let book = books.length[i]
//     console.log(`Book # ${i + 1}`);
//     console.log(`Title: ${books.title}`);
//     console.log(`Author: ${books.firstName} ${books.lastName}`);
//     console.log("---");
// }
/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */


function createBook(title, firstName, lastName) {
    let book = {
        title: title,
        auther: {
            firstName: firstName,
            lastName: lastName
        }
    }
    return book;
}

books.push(createBook())


function showBookInfo() {
    for (let i = 0; i < books.length; i++) {
        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
        console.log("---");
    }
}