var choosePlayer;
var classGame;
var nbaGame; 

var stephC = {
    hP: 200, 
    counterAttack: 25, 
    attack: 20
}

var kawhiL = {
    hP: 175, 
    counterAttack: 30, 
    attack: 15
}

var lebronJ = {
    hP: 150, 
    counterAttack: 35, 
    attack: 10
}

var kevinD = {
    hP: 125, 
    counterAttack: 40, 
    attack: 5
}

var players = [stephC, kawhiL, lebronJ, kevinD]

function resetGame() {
    choosePlayer = true;
}

resetGame();

// for (var i = 0; i < 100; i++) {
//     console.log(choosePlayer);
//     if (choosePlayer === true) {
//         $("#choosePlayer").fadeIn("slow");
//         $("#choosePlayer").fadeOut("slow");
//     }
// }


    $("#choosePlayer").fadeOut();
    $("#choosePlayer").fadeIn();


$(".pic").on("click", function () {
    if (choosePlayer) {
        var you = this.id;
        $("#you").attr("src", you);
        $("#you-text").css('color', this.getAttribute("data-color"));
        $("#you-text").text(this.getAttribute("data-name"));
        choosePlayer = false;
        // how to get this to take precedence over for loop
        $("#choosePlayer").hide()
    }
})