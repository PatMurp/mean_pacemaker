'use strict';
(function () {

	angular.module('paceMaker', ['ngRoute']);

	function config ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.view.html',
			})
			.when('/register', {
				templateUrl: 'auth/register/register.view.html',
				controller: 'registerCtrl',
				controllerAs: 'vm'
			})
			.when('/login', {
				templateUrl: 'auth/login/login.view.html',
				controller: 'loginCtrl',
				controllerAs: 'vm'
			})
			.when('/dashboard', {
				templateUrl: 'dashboard/dashboard.view.html',
				controller: 'dashbCtrl',
				controllerAs: 'vm'
			})
			.when('/report', {
				templateUrl: 'report/report.view.html',
				controller: 'reportCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);
	}

	angular
		.module('paceMaker')
		.config(['$routeProvider', '$locationProvider', config]);
		
})();

