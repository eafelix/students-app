var express = require("express"),
helmet = require("helmet"),
bodyParser = require("body-parser");

var app = express();

var objeto = {nombre:"pepe", edad:80};

app.use(helmet());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/getData', function (req, res) {
  res.send(JSON.stringify(objeto));
});

app.post('/postData', function (req, res) {
  console.log(req.body);
  res.send("todo ok");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
