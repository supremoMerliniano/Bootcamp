const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).on("keypress", function (event) {
    if (!started) {
        $("#level-title").text(`Level ${level}`)

        nextSequence();

        started = true;
    }
})

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence () {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChooseColor = buttonColors[randomNumber];

    $("h1").text(`Level ${level}`);

    gamePattern.push(randomChooseColor);

    $("#" + randomChooseColor).fadeOut(100).fadeIn(100);

    playSound(randomChooseColor);
    level++;

}

function playSound (name) {
    var audio = new Audio(`./sounds/${name}.mp3`)
    audio.play();
}

function animatePress (currentColour) {
    btnColor = $("#" + currentColour)
    btnColor.addClass("pressed");

    setTimeout(function () {
        btnColor.removeClass("pressed")
    }, 100);

}
