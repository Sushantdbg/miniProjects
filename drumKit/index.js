var numberOfButtons = document.querySelectorAll(".drum").length;
var audio1 = new Audio("sounds/tom-1.mp3");
var audio2 = new Audio("sounds/tom-2.mp3");
var audio3 = new Audio("sounds/tom-3.mp3");
var audio4 = new Audio("sounds/tom-4.mp3");
var audio5 = new Audio("sounds/snare.mp3");
var audio6 = new Audio("sounds/crash.mp3");
var audio7 = new Audio("sounds/kick-bass.mp3");

for (var i = 0; i < numberOfButtons; i++) {
  //
  // document.querySelectorAll(".drum")[i].addEventListener("onKeyPress",function() {
  //   this.style.color="blue";
  // })


  // FOR MOUSE CLICK EVENT
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// FOR BUTTON CLICK EVENT
document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

// This is the parametarised function where we can demand for sound response
// from both mouseclick and keypress
function makeSound(key) {

//here fpr some reason probably the if-else loop is causing the program to have
// delay in response with the sounds
  if (key == 'w') {
    audio1.play();
  } else if (key == 'a') {
    audio2.play();
  } else if (key == 's') {
    audio3.play();
  } else if (key == 'd') {
    audio4.play();
  } else if (key == 'j') {
    audio5.play();
  } else if (key == 'l') {
    audio6.play();
  } else if (key == 'k') {
    audio7.play();
  } else {

  }
}

//This is here for animatons
function buttonAnimation(keyPressed) {//don't get confsed here keyPressed is just a parameter name
  var activeButton = document.querySelector("." + keyPressed);

  activeButton.classList.add("pressed");//the pressed class is in csss with
                                          // fade and taransparency values

  setTimeout(function() {
    activeButton.classList.remove("pressed");//adding & removing it with a time
                                              // slot of 100ms causes an animaton like effect
  }, 101);

}
