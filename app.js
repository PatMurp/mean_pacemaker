'use strict';
require('dotenv').load();
var express = require('express');
var path = require('path');
var app = express();
var passport = require('passport');

require('./api/models/database');
require('./api/config/passport');

var routesApi = require('./api/routes/index');

require('./config/express').addMiddleware(app);
//require('./routes')(app);

app.use(passport.initialize());
app.use('/api', routesApi);

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(process.env.PORT || 4000, function() {
	console.log("Express server lintening on port 4000");
});