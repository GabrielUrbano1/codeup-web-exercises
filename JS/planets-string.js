"use strict";

let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
let planetsArray;

// TODO: Convert planetsString to an array, save it to planetsArray.
planetsArray = planetsString.split('|');

console.log(planetsArray);

// TODO: Create a string with <br> tags between each planet. console.log() your results.
//       Why might this be useful?
let planetsWithBrTags = planetsArray.join('<br>');
console.log(planetsWithBrTags);

// Bonus: Create a second string that would display your planets in an unordered list.
//        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
//        console.log() your results.


let planetsInList = '<ul>';
for (let i = 0; i < planetsArray.length; i++) {
    planetsInList += '<li>' + planetsArray[i] + '</li>';
}
planetsInList += '</ul>';
console.log(planetsInList);
