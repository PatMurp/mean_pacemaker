'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('reportCtrl', reportCtrl);

	reportCtrl.$inject = ['activityData', 'authentication', '$http', 'co2Calculator'];
	function reportCtrl (activityData, authentication, $http, co2Calculator) {
		var vm = this;

		vm.options = co2Calculator.bandOptions;

		// get logged in user id
		vm.userId = authentication.currentUser()._id;

		activityData.getUserActivities(vm.userId)
			.success(function(activities) {
				vm.activities = activities;
		});


		vm.addActivity = function () {
			var activity = {
				user: vm.userId, // save user id with activity
				type: vm.newActivity.type,
				location: vm.newActivity.location,
				distance: vm.newActivity.distance,
				starttime: vm.newActivity.starttime,
				duration: vm.newActivity.duration
			};
			activityData.addActivity(activity)
				.success(function(added_activity) {
					vm.activities.push(added_activity);
					vm.newActivity = {};
				});
		};

		vm.updateActivity = function(activity) {
			return $http.put('/api/activities/' + activity._id, {
				type: activity.type,
				location: activity.location,
				distance: activity.distance,
				starttime: activity.starttime,
				duration: activity.duration
			});
		};

		vm.deleteActivity = function(id) {

			activityData.destroy(id)
				.success(function(activities) {
					vm.activities.splice(activities, 1);
				});
		};
	}
})();