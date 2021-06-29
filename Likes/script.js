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

// var card = {
//     name: "Selim",
//     likes: "4",
//     comment: "Trolling is the name of the game",
// }
// console.log (card);

var feedDetail = [
    {name: "Selim", likes: 4, comment:"Trolling is the name of the game" }
]
console.log ("no",feedDetail);



function generateCards(){
    console.log(document.getElementById("hello"));

    var cardList = document.getElementById("hello");
    
    // document.getElementById("hello").innerHTML = feedDetail.map(card =>
    //     `<div>
    //         <div>${card.name}</div>
    //         <div>${card.likes}</div>
    //         <div>${card.comment}</div>
    //     </div>`
    // ).join('')

}

generateCards();
cardFactory(); 


    // var feed = document.querySelector("#hello").innerText;

    // console.log(feed, "feed");



////////



// var yourFeed = [];

function cardFactory(name, likes, comment) {
    var card = {};
    card.name = name;
    card.likes = likes;
    card.comment = comment;
    return card;
}


