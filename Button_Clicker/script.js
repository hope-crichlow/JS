// keeps change until page refreshes
function logOut(button) {
    button.innerHTML = "Logout"
    
}

function removeElement(element) {
    element.remove();
}

function likeAlert(button) {
    window.alert("Ninja was liked");
}

//Incrament Likes Count 
var likes = 0;

function addLike(button){
    console.log("Likes", likes);
    var givenLikes = document.getElementById("likes").innerText;
    console.log(givenLikes);
    likes = givenLikes;
    likes ++;
    document.getElementById("likes").innerText = likes;
}
