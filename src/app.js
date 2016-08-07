'use strict';

var express = require('express');

var app = express();

app.get('/', function(request, response){
	response.send("Working server");
});

app.listen(3000);