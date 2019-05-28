var choosePlayer;
var chooseOpponent;
var startGame;
var classGame;
var nbaGame;
var you;
var opponent;

var stephC = {
    hP: 200,
    counterAttack: 25,
    attack: 20, 
    name: "Steph"
}

var kawhiL = {
    hP: 175,
    counterAttack: 30,
    attack: 15, 
    name: "Kawhi"
}

var lebronJ = {
    hP: 150,
    counterAttack: 35,
    attack: 10, 
    name: "LeBron"
}

var kevinD = {
    hP: 125,
    counterAttack: 40,
    attack: 5, 
    name: "KD"
}

var players = [stephC, kawhiL, lebronJ, kevinD]

function resetGame() {
    choosePlayer = true;
    startGame = true;
    nbaGame = true;
}

function setClassMode() {
    for(var i = 0; i < 4; i++) {
        $("#" + players[i].name).text(players[i].name + ": " + players[i].hP);
    }
}

resetGame();

// for (var i = 0; i < 100; i++) {
//     console.log(choosePlayer);
//     if (choosePlayer === true) {
//         $("#choosePlayer").fadeIn("slow");
//         $("#choosePlayer").fadeOut("slow");
//     }
// }

function fadeInAndOut(idName) {
    $("#" + idName).fadeOut();
    $("#" + idName).fadeIn();
}

// $("#choiceOfPlayer").fadeOut();
// $("#choiceOfPlayer").fadeIn();

fadeInAndOut("choiceOfPlayer");
console.log(this);
// fadeInAndOut("choiceOfOpponent");


$(".pic").on("click", function () {
    if (choosePlayer) {
        startGame = false;
        you = players[this.getAttribute("data-index")];
        $("#you").attr("src", this.id);
        $("#you-text").css('color', this.getAttribute("data-color"));
        $("#you-text").text(this.getAttribute("data-name"));
        if(classGame) {
            $("#you-text").text(this.getAttribute("data-name") + ": " + you.hP); 
        }
        choosePlayer = false;
        chooseOpponent = true;
        // how to get this to take precedence over for loop
        $("#choiceOfPlayer").hide();
        $("#choiceOfOpponent").show();
        console.log(fadeInAndOut);
        console.log(this);
        //Why can this not be called from here!!!
        // $("#chooseOpponent").fadeOut();
        // fadeInAndOut("choiceOfOpponent");
        // you = players[this.getAttribute("data-index")];
    }
    else if (chooseOpponent) {
        opponent = players[this.getAttribute("data-index")];
        $("#opponent").attr("src", this.id);
        $("#opponent-text").css('color', this.getAttribute("data-color"));
        $("#opponent-text").text(this.getAttribute("data-name"));
        if(classGame) {
            $("#opponent-text").text(this.getAttribute("data-name") + ": " + opponent.hP);
        }
        chooseOpponent = false;
        $("#choiceOfOpponent").hide();
    }
})

// $("#.gamePlay").on("click", function () {
//     if(you!== null && opponent !== null) {
//         if(classGame) {

//         }
//         else if(nbaGame) {

//         }
//     }
// })

$("#mode").on("click", function () {
    if(startGame) {
        if(this.getAttribute("data-value") === "nba") {
            classGame = false;
        }
        else {
            nbaGame = false;
            classGame = true;
            setClassMode();
        }
        startGame = false;
    }
})