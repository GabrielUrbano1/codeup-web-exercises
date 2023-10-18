// let i = 1
//
// while (i < 65536){
//     console.log(i = i * 2)
//
// }



// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log(allCones)


do {
    let conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell <= allCones) {
        console.log(conesToSell + " cones sold...");
        allCones -= conesToSell;
    } else {
        console.log("Cannot sell you " + conesToSell + " cones. I only have " + allCones + "...");
    }

} while (allCones > 0);


