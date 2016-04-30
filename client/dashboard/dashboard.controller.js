'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('dashbCtrl', dashbCtrl);

	dashbCtrl.$inject = ['activityData', 'authentication', 'openWeather'];
	function dashbCtrl (activityData, authentication, openWeather) {
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

				// loop to set activity pace
				for(var i = 0; i < activities.length; i++) {
					activities[i].pace = activities[i].duration / activities[i].distance;
				}

				vm.maxPace = Math.max.apply(Math, 
					activities.map(function(o) {
						return o.pace;
					})
				);

				vm.minPace = Math.min.apply(Math, 
					activities.map(function(o) {
						return o.pace;
					})
				);

				vm.numberOfActivities = activities.length;

				// get relative pace in activity range
				for(var j = 0; j < activities.length; j++) {
					var item = activities[j];
					item.relPace = (item.pace - vm.minPace) / (vm.maxPace - vm.minPace);
				}

				// count activity types
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

		openWeather.getWeather().then(function(data) {
			vm.city = data;
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

