//Before starting we have to know about how exactle does SIMON game works
//In the game the user have to repeat the pattern of pressess randomly generated
//by the sysetem
var buttonColours = ["red", "blue", "green", "yellow"];//so to have a random output made a array
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
//abive we initialised the required vars and arrays
$(document).keypress(function() {//function to detect keypress
  if (!started) {
    $("#level-title").text("Level " + level);//change h1 to show current level
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {//detect click on buttons
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);//push color to the user patern array
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //play and animate simultaneously
  checkAnswer(userClickedPattern.length - 1);//caling the check method to compare user and system pattern
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {//to check/compare latest input
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {//when the user input in incorrect
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();//calling the startover method as user's game is over
  }
}

function nextSequence() {//this whole function is to create a new sequence / upgrade to next level
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {//playing sound wrt to color of the key pressed
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {//animation wrt color of keypress
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {// resets everthing to start/initial state
  level = 0;
  gamePattern = [];
  started = false;
}
