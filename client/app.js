'use strict';
(function () {

	angular.module('paceMaker', ['ngRoute', 'xeditable']);

	var onlyLoggedIn = function($location, $q, authentication) {
		var deferred = $q.defer();
		if(authentication.isLoggedIn()) {
			deferred.resolve();
		} else {
			deferred.reject();
			$location.url('/login');
		}
		return deferred.promise;
	};

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
				controllerAs: 'vm',
				resolve: {
					loggedIn: onlyLoggedIn
				}
			})
			.when('/report', {
				templateUrl: 'report/report.view.html',
				controller: 'reportCtrl',
				controllerAs: 'vm',
				resolve: {
					loggedIn: onlyLoggedIn
				}
			})
			.when('/carbon', {
				templateUrl: 'carbonCalc/co2.view.html',
				controller: 'co2CalcCtrl',
				controllerAs: 'vm',
				resolve: {
					loggedIn: onlyLoggedIn
				}
			})
			.otherwise({redirectTo: '/'});


		$locationProvider.html5Mode(true);
	}

	angular
		.module('paceMaker')
		.config(['$routeProvider', '$locationProvider', config]);
		
})();

