//Incrament Likes Count 
var likes1 = 0;
var likes2 = 0;
var likes3 = 0;

function addLike1(button){
    console.log("Likes1", likes1);
    var givenLikes = document.querySelector("#likes1").innerText;
    console.log(givenLikes);
    likes1 = givenLikes;
    likes1 ++;
    document.querySelector("#likes1").innerText = likes1;
}

function addLike2(button){
    console.log("Likes2", likes2);
    var givenLikes = document.querySelector("#likes2").innerText;
    console.log(givenLikes);
    likes2 = givenLikes;
    likes2 ++;
    document.querySelector("#likes2").innerText = likes2;
}

function addLike3(button){
    console.log("Likes3", likes3);
    var givenLikes = document.querySelector("#likes3").innerText;
    console.log(givenLikes);
    likes3 = givenLikes;
    likes3 ++;
    document.querySelector("#likes3").innerText = likes3;
}








































// var card = {
//     name: "Selim",
//     likes: "4",
//     comment: "Trolling is the name of the game",
// }
// console.log (card);

// var feedDetail = [
//     {name: "Selim", likes: 4, comment:"Trolling is the name of the game" }
// ]
// console.log ("no",feedDetail);



// function generateCards(){
//     console.log(document.getElementById("hello"));

//     var cardList = document.getElementById("hello");
    
    // document.getElementById("hello").innerHTML = feedDetail.map(card =>
    //     `<div>
    //         <div>${card.name}</div>
    //         <div>${card.likes}</div>
    //         <div>${card.comment}</div>
    //     </div>`
    // ).join('')

// }

// generateCards();
// cardFactory(); 


    // var feed = document.querySelector("#hello").innerText;

    // console.log(feed, "feed");



////////



// var yourFeed = [];

// function cardFactory(name, likes, comment) {
//     var card = {};
//     card.name = name;
//     card.likes = likes;
//     card.comment = comment;
//     return card;
// }


