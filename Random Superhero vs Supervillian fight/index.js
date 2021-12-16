const superheroes = require('superheroes');
const supervillains = require('supervillains');


console.log("The villan is appraoching you")

var sup0= superheroes.random();
var sup1= supervillains.random();
console.log("Your hero "+sup0+"has arrived to save you");
console.log("But the villan "+sup1+" is very strong");


var yesORno = (Math.floor(Math.random()))*10;

var winner=(yesORno>4)?sup0:sup1;
console.log("The fight was very extensive and the winner is "+winner);
if(winner==sup0){
  console.log("You are now safe");
}
else console.log("Run lmao hero ded");
