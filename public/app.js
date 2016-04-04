'use strict';
angular.module('paceMaker', []);

var activityListCtrl = function($scope) {

	$scope.data = {
		activities: [{
			type: 'run',
			location: 'new ross',
			distance: 5,
			starttime: '3:40',
			duration: 5,
			_id: 1234
		}, {
			type: 'walk',
			location: 'old ross',
			distance: 5,
			starttime: '5:40',
			duration: 5,
			_id: 1234
		}]
	};
};

angular
	.module('paceMaker')
	.controller('activityListCtrl', activityListCtrl);
