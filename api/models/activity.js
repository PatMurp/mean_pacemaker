'use strict';
var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
	user: {
    type : mongoose.Schema.Types, 
    ref : 'User' 
  },
  type: String,
  location: String,
  distance: Number,
  starttime: Date,
  duration: Number
});

module.exports = mongoose.model('Activity', activitySchema);
