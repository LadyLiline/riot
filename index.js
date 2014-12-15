var express = require("express");
var app = express();
var api = '633cbe7f-4b19-41eb-8d57-c13d04b85b71';

console.log("Hello World " + api);
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3001)