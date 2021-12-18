var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
$(".btn").click(function() {
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //console.log(userClickedPattern);
  checkAnswer(userChosenColour);

});

document.addEventListener("keypress", function(event) {
  if (level===0){
    $("h1").html("Press A Key to Start");
  }
  nextSequence();
  buttonAnimation(event.key);
})

function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  if (level>0){
    $("h1").html("Level "+level);
  }
  checkAnswer(randomNumber);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
//I broke something here BUT WHAT ??
function checkAnswer(currentLevel){
  if(buttonColours[currentLevel]==gamePattern[gamePattern.length-1]){
    console.console.log("success");
  }
  else console.console.log("wrong");

  if(buttonColours===gamePattern){
    setTimeout(nextSequence(){
      userClickedPattern=[];ds
    }, 1000);
  }

}
