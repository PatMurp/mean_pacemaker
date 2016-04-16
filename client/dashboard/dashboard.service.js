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

		return {
		getUserActivities: getUserActivities,
		addActivity: addActivity
		};
	}
 
})();



	