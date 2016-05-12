'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('reportCtrl', reportCtrl);

	reportCtrl.$inject = ['activityData', 'authentication', '$http'];
	function reportCtrl (activityData, authentication, $http) {
		var vm = this;

		// get logged in user id
		vm.userId = authentication.currentUser()._id;

		activityData.getUserActivities(vm.userId)
			.success(function(activities) {
				vm.activities = activities;
		});

		vm.updateActivity = function(activity) {
			return $http.put('/api/activities/' + activity._id, {
				type: activity.type,
				location: activity.location,
				distance: activity.distance,
				starttime: activity.starttime,
				duration: activity.duration
			});
		};

		vm.deleteActivity = function(index) {
			activityData.destroy(index._id)
				.success(function() {
					vm.activities.splice(vm.activities.indexOf(index), 1);
				});
		};

	}
})();