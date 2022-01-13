var a = document.getElementsByTagName("h1")[0].innerHTML = "REFRESH ME";
var randomNumber1 = (Math.floor(Math.random() * 6));
var randomNumber2 = (Math.floor(Math.random() * 6));
var pickImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// var x=document.getElementsByClassName("img1").setElementsByClassName("src", "images/dice3.png");
var x = document.getElementsByTagName("img")[0].setAttribute("src", pickImages[randomNumber1]);
// FOR SOME REASON THIS APPROACH IS NOT WORKING AS I WANTED TO CHANGE THE SRC ON THE IMG1 CLASS TAG TO CHANGE THE IMAGE UPON EACH REFRESH BUT
// IT DOESNT SEEMS TO BE WORKING
//this is for secound image
var x = document.getElementsByTagName("img")[1].setAttribute("src", pickImages[randomNumber2]);
if (randomNumber1 === randomNumber2) {
  var a = document.getElementsByTagName("h1")[0].innerHTML = "ITS A TIE LMAO";
} else if (randomNumber1 > randomNumber2) {
  var a = document.getElementsByTagName("h1")[0].innerHTML = "PLAYER 1 WINS LESSS GOOOOOOOOO";

} else {
  var a = document.getElementsByTagName("h1")[0].innerHTML = "PLAYER 2 WINS LESSS GOOOOOOOOO";
}
