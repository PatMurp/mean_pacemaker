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

				vm.total = 0;
				for(var i=0; i<activities.length; i++) {
					// count activities
					vm.total++;
					

				

					// get month number
					//var month = activities[i].starttime.value.getMonth();
					var month = new Date(activities[i].starttime).getMonth();
					console.log(month);
					//vm.monthsJogged[month].count++;
				}
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

		
		

		       // Maximum Time
      // $scope.maxTime = Math.max.apply(Math, $scope.data.map(function(o) {
      //     return o.time;
	}

})();

