const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const port=3000

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/',function(req,res){
  var weight=Number(req.body.w);
  var height=Number(req.body.h);
  var result=weight/(height*height);
  res.send("Your BMI is : "+result);
})

app.listen(port, function(){
  console.log("Server start at:"+port);
});
