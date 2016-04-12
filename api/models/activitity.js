'use strict';
var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
  type: String,
  location: String,
  distance: Number,
  starttime: Date,
  duration: Number
});

mongoose.model('Activity', activitySchema);