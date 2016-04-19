'use strict';
var Activity = require('../models/activity');

// error handling
function handleError(res, err) {
	return res.send(500, err);
}

// get a list of all activites
module.exports.activitesViewAll = function(req, res) {
	
	Activity.find(function(err, activites) {
		if(err) { return handleError(res, err); }
		return res.status(200).json(activites);
	});
};

// list user activities using mongoose query
module.exports.activityViewUser = function(req, res) {

	Activity.find({user: req.params.user}, function(err, activites) {
		if(err) { return handleError(res, err); }
		return res.status(200).json(activites);
	});
};

// add new activity
module.exports.activityCreate = function(req, res) {
	Activity.create(req.body, function(err, activity) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(activity);
	});
};

// update activity
module.exports.activityUpdate = function(req, res) {
	Activity.findById(req.params.id, function (err, activity) {
		activity.type = req.body.type;
		activity.location = req.body.location;
		activity.distance = req.body.distance;
		activity.starttime = req.body.starttime;
		activity.duration = req.body.duration;
		activity.save(function (err) {
			if(err) {return handleError(res, err);}
			return res.status(200).json("Update secessful");
		});
	});
};

//delete activity
module.exports.activityDelete = function(req, res) {
	Activity.findById(req.params.id, function(err, activity) {
		activity.remove(function(err) {
			if(err) { return handleError(res, err); }
			return res.status(200).json("Activity Deleted");
		});
	});
};