const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Madhubani&appid=4b2aac5b4ba17b702c0f6787f04822fe&units=metric";
  https.get(url, function(response){
    console.log(response);
  })



  // res.send("Server is up n Running");
})

app.listen(3000, function(){
  console.log(" Server is up and Running on port 3000");
})
