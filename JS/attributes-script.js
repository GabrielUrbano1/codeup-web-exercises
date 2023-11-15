// Now, let's use JavaScript to manipulate these elements:
//
//
//
// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
setTimeout(function () {
    const profilePic = document.getElementById("profile-pic")
    profilePic.src = 'Img/profilePic.jpg'
}, 2000)

//
//
//     Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    setTimeout(function (){
        const profileName= document.getElementById('profile-name')
        profileName.innerHTML = "Jason Smith"
    }, 4000)

//
//
//     Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
setTimeout(function() {
    const profileDesc = document.getElementById('profile-desc');
    profileDesc.style.color = 'green';
    profileDesc.style.fontFamily = 'Arial, sans-serif';
}, 6000);
//
//     Use setTimout to create these behaviors.
//
//
//
//     Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
setInterval(function() {
    const profileCard = document.getElementById('profile-card');
    profileCard.style.backgroundColor = profileCard.style.backgroundColor === 'white' ? 'black' : 'white'; // Toggle between red and blue
    const profileDesc = document.getElementById('profile-desc');
    profileDesc.style.color = profileDesc.style.color === "black" ? "white":"black";
    const profileName= document.getElementById('profile-name')
    profileCard.style.color = profileCard.style.color === "black" ? "white":"black";
    profileDesc.style.fontFamily = 'Arial, sans-serif';
}, 2000); // 2000 milliseconds = 2 seconds


const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "black", "white", "gray"];


const toggleBack = document.getElementById("toggle-btn")
toggleBack.addEventListener("click", changeBackgroundColor)
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
changeBackgroundColor()