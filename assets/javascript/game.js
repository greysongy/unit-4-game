$(".pic").on("click", function () {
    var you = this.id;
    $("#you").attr("src", you);
    $("#you-text").css('color', this.getAttribute("data-color"));
    $("#you-text").text(this.getAttribute("data-name"));
})