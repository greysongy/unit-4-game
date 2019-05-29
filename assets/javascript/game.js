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
    hP: 152,
    currenthP: 152,
    counterAttack: 11,
    attack: 9,
    currentAttack: 9,
    name: "Steph",
    validOpponent: true,
    points: 0,
    threePer: .437,
    twoPer: .525,
    color: "#ffd700"
}

var kawhiL = {
    hP: 149,
    currenthP: 149,
    counterAttack: 20,
    attack: 6,
    currentAttack: 6,
    name: "Kawhi",
    validOpponent: true,
    points: 0,
    threePer: .371,
    twoPer: .542,
    color: "#ff0000"
}

var lebronJ = {
    hP: 151,
    currenthP: 151,
    counterAttack: 10,
    attack: 8,
    currentAttack: 8,
    name: "LeBron",
    validOpponent: true,
    points: 0,
    threePer: .339,
    twoPer: .582,
    color: "#800080"
}

var kevinD = {
    hP: 150,
    currenthP: 150,
    counterAttack: 15,
    attack: 7,
    currentAttack: 7,
    name: "KD",
    validOpponent: true,
    points: 0,
    threePer: .353,
    twoPer: .587,
    color: "#ffd700"
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
    $("#youScore").hide();
    $("#oppScore").hide();

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
            else {
                console.log("color: " + you.color);
                $("#youScore").css("color", you.color);
                $("#youScore").text(0);
                $("#att1").text("2P %: " + you.twoPer);
                $("#att2").text("3P %: " + you.threePer);
            }
            choosePlayer = false;
            chooseOpponent = true;
            you.validOpponent = false;
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
        // console.log("choose opponent: " + this.chooseOpponent + "valid Opponent: " + this.validOpponent);
        else if (chooseOpponent) {
            // console.log("Did we get here");
            opponent = players[this.getAttribute("data-index")];
            if (opponent.validOpponent) {
                $("#opponent").attr("src", this.id);
                $("#opponent-text").css('color', this.getAttribute("data-color"));
                $("#opponent-text").text(this.getAttribute("data-name"));
                if (classGame) {
                    $("#opponent-text").text(this.getAttribute("data-name") + ": " + opponent.hP);
                    $("#att3").text("Attack Power: " + opponent.attack);
                    $("#att4").text("Counter Attack Power: " + ": " + opponent.counterAttack);
                }
                else {
                    $("#oppScore").css("color", opponent.color);
                    $("#oppScore").text(0);
                    $("#att3").text("2P %: " + opponent.twoPer);
                    $("#att4").text("3P %: " + opponent.threePer);
                }
                chooseOpponent = false;
                this.validOpponent = false;
                $("#choiceOfOpponent").hide();
            }
        }
        // console.log(this)
        // console.log("choose opponent: " + chooseOpponent + "valid Opponent: " + this.validOpponent);
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
                    $("#leftText").text("You");
                    $("#rightText").text("Lose");
                }
                else if (opponent.currenthP <= 0) {
                    $("#opponent").attr("src", "");
                    $("#opponent-text").text(this.getAttribute(""));
                    $("." + opponent.name + "Image").hide();
                    $("." + opponent.name + "Label").text("");
                    $("#att3").text("Attack Power:");
                    $("#att4").text("Counter Attack Power: ");
                    opponent = null;
                    numOpponents--;
                    if (numOpponents !== 0) {
                        chooseOpponent = true;
                        $("#choiceOfOpponent").show();
                    }
                    else {
                        gameOver = true;
                        $("#leftText").text("You");
                        $("#rightText").text("Win");
                    }
                }
            }
            else if (nbaGame) {
                if (Math.random() < .5) {
                    if (Math.random() < .5) {
                        if (Math.random() < you.twoPer) {
                            you.points += 2;
                        }
                        if (Math.random() < opponent.twoPer) {
                            opponent.points += 2;
                        }
                    }
                    else {
                        if (Math.random() < you.twoPer) {
                            you.points += 2;
                        }
                        if (Math.random() < opponent.threePer) {
                            opponent.points += 3;
                        }
                    }
                }
                else {
                    if (Math.random() < .5) {
                        if (Math.random() < you.threePer) {
                            you.points += 3;
                        }
                        if (Math.random() < opponent.twoPer) {
                            opponent.points += 2;
                        }
                    }
                    else {
                        if (Math.random() < you.threePer) {
                            you.points += 3;
                        }
                        if (Math.random() < opponent.threePer) {
                            opponent.points += 3;
                        }
                    }
                }
                $("#youScore").text(you.points);
                $("#oppScore").text(opponent.points);
                if (you.points >= 11 || opponent.points >= 11) {
                    if (you.points > opponent.points) {
                        $("#oppScore").text(0);
                        $("#opponent").attr("src", "");
                        $("#opponent-text").text(this.getAttribute(""));
                        $("." + opponent.name + "Image").hide();
                        $("." + opponent.name + "Label").text("");
                        $("#att3").text("2P %: ");
                        $("#att4").text("3P %: ");
                        opponent = null;
                        numOpponents--;
                        if (numOpponents !== 0) {
                            chooseOpponent = true;
                            $("#choiceOfOpponent").show();
                        }
                        else {
                            gameOver = true;
                            $("#leftText").text("You");
                            $("#rightText").text("Win");
                        }
                    }
                    else if (you.points < opponent.points) {
                        gameOver = true;
                        $("#leftText").text("You");
                        $("#rightText").text("Lose");
                    }

                    else {
                        gameOver = true;
                        $("#leftText").text("You");
                        $("#rightText").text("Tie");
                    }
                    you.points = 0;
                    $("#youScore").text(you.points);
                }

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