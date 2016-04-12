'use strict';
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

// add auth parameter after url to secure api for registered users

var ctrlAuth = require('../controllers/authentication');
var ctrlActiv = require('../controllers/activities');

//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// activities
router.get('/activities', ctrlActiv.activitesView);
router.post('/activities', ctrlActiv.activityCreate);
router.put('/activities/:id', ctrlActiv.activityUpdate);
router.delete('/activities/:id', ctrlActiv.activityDelete);

module.exports = router;