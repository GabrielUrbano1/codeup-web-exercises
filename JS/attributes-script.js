// Now, let's use JavaScript to manipulate these elements:
//
//
//
// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
setTimeout(function () {
    const profilePic = document.getElementById("profile-pic")
    profilePic.src = 'Img/profilePic.jpg'
}, 200)

//
//
//     Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    setTimeout(function (){
        const profileName= document.getElementById('profile-name')
        profileName.innerHTML = "Jason Smith"
    }, 400)

//
//
//     Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
setTimeout(function() {
    const profileDesc = document.getElementById('profile-desc');
    profileDesc.style.color = 'green';
    profileDesc.style.fontFamily = 'Arial, sans-serif';
}, 6000); // 6000 milliseconds = 6 seconds
//
//     Use setTimout to create these behaviors.
//
//
//
//     Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
setInterval(function() {
    const profileCard = document.getElementById('profile-card');
    profileCard.style.backgroundColor = profileCard.style.backgroundColor === 'red' ? 'blue' : 'red'; // Toggle between red and blue
}, 2000); // 2000 milliseconds = 2 seconds