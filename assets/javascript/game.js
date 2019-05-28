var choosePlayer;
var chooseOpponent;
var startGame;
var classGame;
var nbaGame;
var you;
var opponent;
var numOpponents = 3;
var gameOver = false;

var stephC = {
    hP: 200,
    currenthP: 200,
    counterAttack: 25,
    attack: 20,
    currentAttack: 20,
    name: "Steph"
}

var kawhiL = {
    hP: 175,
    currenthP: 175,
    counterAttack: 30,
    attack: 15,
    currentAttack: 15,
    name: "Kawhi"
}

var lebronJ = {
    hP: 150,
    currenthP: 150,
    counterAttack: 35,
    attack: 10,
    currentAttack: 10,
    name: "LeBron"
}

var kevinD = {
    hP: 125,
    currenthP: 125,
    counterAttack: 40,
    attack: 5,
    currentAttack: 5,
    name: "KD"
}

var players = [stephC, kawhiL, lebronJ, kevinD]

function resetGame() {
    choosePlayer = true;
    startGame = true;
    nbaGame = true;
}

function setClassMode() {
    for (var i = 0; i < 4; i++) {
        $("#" + players[i].name).text(players[i].name + ": " + players[i].hP);
    }
    $("#att1").text("Attack Power:");
    $("#att2").text("Counter Attack Power: ");
    $("#att3").text("Attack Power:");
    $("#att4").text("Counter Attack Power: ");
    $("#gamePlay").text('Attack');

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
    if (!gameOver) {
        if (choosePlayer) {
            startGame = false;
            you = players[this.getAttribute("data-index")];
            $("#you").attr("src", this.id);
            $("#you-text").css('color', this.getAttribute("data-color"));
            $("#you-text").text(this.getAttribute("data-name"));
            if (classGame) {
                $("#you-text").text(this.getAttribute("data-name") + ": " + you.hP);
                $("#att1").text("Attack Power: " + you.attack);
                $("#att2").text("Counter Attack Power: " + you.counterAttack);
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
            if (classGame) {
                $("#opponent-text").text(this.getAttribute("data-name") + ": " + opponent.hP);
                $("#att3").text("Attack Power: " + opponent.attack);
                $("#att4").text("Counter Attack Power: " + ": " + opponent.counterAttack);
            }
            chooseOpponent = false;
            $("#choiceOfOpponent").hide();
        }
    }
})

$("#gamePlay").on("click", function () {
    if (!gameOver) {
        if (you !== null && opponent !== null) {
            if (classGame) {
                you.currentAttack += you.attack;
                opponent.currenthP -= you.currentAttack;
                you.currenthP -= opponent.counterAttack;
                $("#att1").text("Attack Power: " + you.currentAttack);
                $("#you-text").text(you.name + ": " + you.currenthP);
                $("#opponent-text").text(opponent.name + ": " + opponent.currenthP);
                if (you.currenthP <= 0) {
                    gameOver = true;
                    console.log("You Lose");
                }
                else if (opponent.currenthP <= 0) {
                    opponent = null;
                    $("#opponent").attr("src", "");
                    $("#opponent-text").text(this.getAttribute(""));
                    numOpponents--;
                    if (numOpponents !== 0) {
                        chooseOpponent = true;
                        $("#choiceOfOpponent").show();
                    }
                    else {
                        gameOver = true;
                        console.log("You win");
                    }
                }
            }
            else if (nbaGame) {

            }
        }
    }
})

$(".mode").on("click", function () {
    if (!gameOver) {
        if (startGame) {
            console.log(this.getAttribute("data-value"));
            if (this.getAttribute("data-value") === "nba") {
                console.log("We should have gotten here");
                classGame = false;
            }
            else {
                nbaGame = false;
                classGame = true;
                setClassMode();
            }
            startGame = false;
        }
    }
})