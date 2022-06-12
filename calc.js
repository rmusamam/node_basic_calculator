const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.post("/", function (req, res) {
var a=Number(req.body.fn)
var b=Number(req.body.ln)
var c= a+b
console.log(c)
  res.send("Result is :  "+ c);
});


app.get('/bmiCalc',function(req,res){

console.log('Get bmi calc')
  res.sendFile(__dirname+'/bmiCalc.html')
})


app.post('/bmiCalc',function(req,res){
  console.log('bmi post its working')
  //console.log(req.body)
  var a = parseFloat(req.body.Height)
  //console.log(a) 
   var b = parseFloat(req.body.Weight)
  var c= b/(a*b)
  res.send(c)
})

app.listen(3000, function () {
  console.log("3000 port in successfully Active");
});
