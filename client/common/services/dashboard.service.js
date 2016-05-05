'use strict';
(function () {

	angular
		.module('paceMaker')
		.service('activityData', activityData);

	activityData.$inject = ['$http'];
	function activityData($http) {

		var getUserActivities = function(user) {
			return $http.get('/api/activities/' + user);
		};

		var addActivity = function(activity) {
			return $http.post('/api/activities', activity);
		};

		// var editActivity = function(activity) {
		// 	return $http.put('/api/activities/' + activity.id, activity);
		// };

		var destroy = function(id) {
			return $http.delete('/api/activities/' + id);
		};

		return {
			getUserActivities: getUserActivities,
			addActivity: addActivity,
			destroy: destroy
		};
	}
 
})();



	