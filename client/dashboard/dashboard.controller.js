'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('dashbCtrl', dashbCtrl);

	dashbCtrl.$inject = ['activityData', 'authentication'];
	function dashbCtrl (activityData, authentication) {
		var vm = this;
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
	}

})();

