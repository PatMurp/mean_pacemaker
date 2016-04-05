'use strict';
(function () {

	angular.module('paceMaker', ['ngRoute']);

	function config ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.view.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);
	}

	angular
		.module('paceMaker')
		.config(['$routeProvider', '$locationProvider', config]);
		
})();

