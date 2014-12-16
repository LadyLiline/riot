var express = require("express");
var request = require('request');

var api = '633cbe7f-4b19-41eb-8d57-c13d04b85b71';

var url = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/37?champData=skins&api_key='+api;

var app = express();

console.log("Hello World " + api);

app.get('/', function (req,res){

	res.render('index.html', {pattern:null});
});

app.get('/riotweb/riot.html', function(req, res) {
  request(url, function(error,response,body) {
	if (!error && response.statusCode==200){
		console.log('body ' + body);
		res.send(body);
	}

});

});






app.listen(3001)