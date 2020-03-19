var express = require("express"),
  helmet = require("helmet"),
  bodyParser = require("body-parser");

var app = express();

var usuario = [
  { name: "pepe", age: 80 },
  { name: "pepito", age: 70 },
  { name: "jose", age: 60 }
];

app.use(helmet());
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/getData", function(req, res) {
  res.send(JSON.stringify(usuario));
});

// json
app.post("/postData", function(req, res) {
  console.log(req.body);
  res.send(200, "ok");
});

// form
app.post("/createUser", function(req, res) {
  console.log(req.body);
  res.send(200, "ok");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
