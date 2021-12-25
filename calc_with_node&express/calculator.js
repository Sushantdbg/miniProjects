const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = 3000;
app.get('/', function(req, res) {
  // res.send('Hello');// this sends individual bits of data
  res.sendFile(__dirname + "/index.html"); //this sends files that are mentioned with the filepath
// the __dirname is used to get the relative file location
});
app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  // Here we used "Number" because if we simply write the num and and add them then no will be concatination and not addition.
  
  var result = num1 + num2;

  res.send("Result : " + result);
});
app.listen(port, function() {
  console.log(`Server started successfully at ${port}`);
});
