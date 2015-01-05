var express = require("express");
var request = require('request');
var fs = require('fs');


var api = '633cbe7f-4b19-41eb-8d57-c13d04b85b71';

var url = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/37?champData=skins&api_key='+api;

//https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/37?champData=skins&api_key=633cbe7f-4b19-41eb-8d57-c13d04b85b71

var app = express();

//Set the view directory to /views
//app.set("views", __dirname + "/views");
//app.set("view engine", "ejs"); //tell express we're using EJS
//s

//use jade templating language
/*app.set("view engine", "jade");*/

console.log("Hello World " + api);

app.get('/index', function(req, res) {
	fs.readFile('./views/index.html', function (err, html) {
    if (err) {
        throw err; 
    }
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
	});
});

app.get('/call', function(req, res) {
	request({'url':url, 'proxy':'http://pac.tsl.telus.com:8080'}, function(error,response,body) {
	if (!error && response.statusCode==200){
		//console.log('body ' + body);

		console.log(body);
		res.send(body);
		//res.render("index.ejs", body);
		
	}
})
});




app.listen(3001)