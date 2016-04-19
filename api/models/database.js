'use strict';
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/paceMaker';

mongoose.connect(dbURI);

// include schemas
require('./user');
require('./activity');