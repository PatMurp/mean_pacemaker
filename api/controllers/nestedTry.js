var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};




module.exports.activityCreate = function(req, res) {
  if (req.params.userid) {
    User
      .findById(req.params.userid)
      .select('activities')
      .exec(
        function(err, user) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            doAddActivity(req, res, user);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, userid required"
    });
  }
};

var doAddActivity = function(req, res, user) {
  if (!user) {
    sendJSONresponse(res, 404, "invalid user id");
  } else {
    user.activities.push({
      type: req.body.type,
      location: req.body.location,
      distance: req.body.distance,
      starttime: req.body.starttime,
      duration: req.body.duration
    });
    user.save(function(err, user) {
    	var thisActivity;
      if (err) {
        sendJSONresponse(res, 400, err);
      } else {
      	thisActivity = user.activities[user.activities.length -1];
      	sendJSONresponse(res, 200, thisActivity);
      }
    });
  }
};