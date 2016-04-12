'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('dashbCtrl', dashbCtrl);

	function dashbCtrl ($http) {
		var vm = this;

		$http.get('/api/activities').success(function(activities) {
			vm.activities = activities;
		});

	}

})();

