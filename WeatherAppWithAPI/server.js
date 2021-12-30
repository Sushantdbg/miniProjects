const express = require("express");
const https = require("https"); //a native node module so doesn't need a npm install to work
const app = express();

app.get("/", function(req, res) {

  //here below the url requires a strict formatting i.e. "https://"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Madhubani&appid=4b2aac5b4ba17b702c0f6787f04822fe&units=metric";
  https.get(url, function(response) { // callback function
    // console.log(response);
    console.log(response.statusCode); //here we can use different type of specifiers
    // from the JSON map to push thing to console as well
    //as to use it at other places

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const feelsLike = weatherData.main.feels_like
      const icon = weatherData.weather[0].icon

      // const object={
      //   name:"Sushant";
      //   favouriteFood:"ice cream"
      // }
      // console.log(JSON.stringify(object));
      const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
      res.write("<h1><p> The weather here currently is "+weatherDescription+"</p></h1>");
      res.write("<h1> The temperature in Madhubani is "+temp+" degree Celcius "+"and it feels like "+ feelsLike+ "</h1>");
      res.write("<img src="+imageURL+">");
      res.send()
    })

  })
  // res.send("Server is up n Running");
})

app.listen(3000, function() {
  console.log(" Server is up and Running on port 3000");
})
