// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//         yearsOfExperience: 5
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//         yearsOfExperience: 6
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//         yearsOfExperience: 7
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//         yearsOfExperience: 8
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//         yearsOfExperience: 9
//     }
// ];
//
// // Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//
// //     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const userLanguage = users.filter(user => user.languages.length >= 3)
// //     Use .map to create an array of strings where each element is a user's email address
// const userEmail = users.map(users => users.email)
// // Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const totalYearsExperience = users.reduce((total, users) =>total + users.yearsOfExperience, 0)
// const averageYears = totalYearsExperience / users.length
// //     Use .reduce to get the longest email from the list of users.
// const longestEmail = users.reduce((longest, user) => {
//     if (user.email.length > longest.length) {
//         return user.email;
//     } else {
//         return longest;
//     }
// }, '');
// //     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// const userNamesString = users.reduce((namesString, user, index) => {
//     if (index === 0) {
//         return user.name;
//     } else {
//         return `${namesString}, ${user.name}`;
//     }
// }, '');
//
// console.log(userLanguage)
// console.log(userEmail)
// console.log(totalYearsExperience)
// console.log(averageYears)
// console.log(longestEmail)
// console.log(userNamesString)

//nested loops - one inside another


