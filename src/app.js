'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send("<h1>Working server</h1>");
});

app.listen(3000, function(){
	console.log("Frontend server is running on port 3000!");
});