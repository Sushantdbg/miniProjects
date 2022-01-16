const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var htmlInputs = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = arr[currentDay];

  res.render("response", {
    kindOfDay: day,
    inputOfUser: htmlInputs
  });
});

app.post("/", function(req, res) {
  var currInput = req.body.newItem; //no need to redeclare here lmao it cause me an error
  htmlInputs.push(currInput);
  res.redirect("/"); //we are doing this to get around the conflict of
  //scope and no declaration errror
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
