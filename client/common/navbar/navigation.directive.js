'use strict';
(function () {

	angular
		.module('paceMaker')
		.directive('navigation', navigation);

	function navigation () {
		return {
			restrict: "EA",
			templateUrl: '/common/navbar/navigation.template.html',
			controller: 'navigationCtrl as navvm'
		};
	}

})();