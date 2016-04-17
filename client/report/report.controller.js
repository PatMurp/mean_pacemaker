'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('reportCtrl', reportCtrl);

	reportCtrl.$inject = ['activityData', 'authentication'];
	function reportCtrl (activityData, authentication) {
		var vm = this;
		// get logged in user id
		vm.userId = authentication.currentUser()._id;

		activityData.getUserActivities(vm.userId)
			.success(function(activities) {
				vm.activities = activities;
		});

		vm.deleteActivity = function(id) {

			activityData.destroy(id)
				.success(function(activities) {
					vm.activities.splice(activities, 1);
				});
		};

	}
})();