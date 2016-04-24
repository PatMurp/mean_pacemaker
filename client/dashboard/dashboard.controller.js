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

				vm.maxTime = Math.max.apply(Math,
					activities.map(function(o) {
						return o.duration;
					})
				);

				vm.maxDistance = Math.max.apply(Math,
					activities.map(function(o) {
						return o.distance;
					}) 
				);

				vm.articlesByType = activities.reduce(function(prev, activity) {

					if( !!prev[activity.type]) {
						// activity type already exists -> increment
						prev[activity.type]++;
					} else {
						// activity type does not exist -> init
						prev[activity.type] = 1;
					}
					return prev;
				}, {});

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

