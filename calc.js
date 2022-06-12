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

app.listen(3000, function () {
  console.log("3000 port in successfully Active");
});
