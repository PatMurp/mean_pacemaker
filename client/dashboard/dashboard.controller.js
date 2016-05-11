'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('dashbCtrl', dashbCtrl);

	dashbCtrl.$inject = ['activityData', 'authentication', 'openWeather', 'co2Calculator'];
	function dashbCtrl (activityData, authentication, openWeather, co2Calculator) {
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

				vm.totalKg = function() {
					var total = 0;
					for (var k=0; k < activities.length; k++) {
						if (activities[k].kgCo2 > 0) {
							total += activities[k].kgCo2;
						}
					}
					return total.toFixed(3);
				};

				vm.totalValue = co2Calculator.CO2Value(vm.totalKg(), 6);

		});

		// get waterford city weather data 
		openWeather.getWeather().then(function(data) {
			vm.city = data;
		});

	}

})();

