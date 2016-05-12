'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('addActivityCtrl', addActivityCtrl);

	addActivityCtrl.$inject = ['activityData', 'authentication', 'co2Calculator', '$location'];
	function addActivityCtrl(activityData, authentication, co2Calculator, $location) {
		var vm = this;

		vm.options = co2Calculator.bandOptions;
		vm.newActivity = {};
		vm.newActivity.distance = 0;
		vm.co2_band = "C";

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
				duration: vm.newActivity.duration,
				kgCo2: vm.savings
			};


			activityData.addActivity(activity)
				.success(function(added_activity) {
					vm.activities.push(added_activity);
					vm.savings = null;
					$location.path('/dashboard');
				});

		};

		vm.calc = function () {
			if (vm.newActivity.distance > 0) {
				vm.savings = co2Calculator.CO2savings(vm.newActivity.distance, vm.current_co2_band);
			}
		};
		vm.calc();
	}

})();