'use strict';
(function () {

	angular
		.module('paceMaker')
		.service('activityData', activityData);

	activityData.$inject = ['$http'];
	function activityData($http) {

		var getActivities = function () {
			return $http.get('/api/activities');
		};

		var addActivity = function(activity) {
			return $http.post('/api/activities', activity);
		};

		return {
		getActivities: getActivities,
		addActivity: addActivity
	};
	}
 
})();



	