//Incrament Likes Count 
var likes = 0;

function addLike(button){
    console.log("Likes", likes);
    var givenLikes = document.querySelector("#likes").innerText;
    console.log(givenLikes);
    likes = givenLikes;
    likes ++;
    document.querySelector("#likes").innerText = likes;
}