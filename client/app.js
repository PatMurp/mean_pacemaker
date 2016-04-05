'use strict';
angular.module('paceMaker', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl'
		})
		.otherwise({redirectTo: '/'});
}

angular
	.module('paceMaker')
	.config(['$routeProvider', config]);
