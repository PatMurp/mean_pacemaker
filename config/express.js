'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');

exports.addMiddleware = function(app) {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use(express.static('public'));
	app.use(errorHandler());
};