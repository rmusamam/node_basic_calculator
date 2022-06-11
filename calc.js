const express = require("express");
const bodyParser = require("body-parser");
// const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyParser, urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("3000 port in successfully Active");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
  // console.log(__dirname)
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("thanks for posting ");
});
 