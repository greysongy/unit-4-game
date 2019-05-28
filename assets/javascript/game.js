var choosePlayer;

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

for(var i = 0; i < 5; i++) {
    $("#choosePlayer").fadeOut();
    $("#choosePlayer").fadeIn();
}

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