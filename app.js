'use strict';
var express = require('express');
var path = require('path');
var app = express();

require('./config/express').addMiddleware(app);
//require('./routes')(app);

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(process.env.PORT || 4000, function() {
	console.log("Express server lintening on port 4000");
});