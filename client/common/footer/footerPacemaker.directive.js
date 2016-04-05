'use strict';
(function () {

	angular
		.module('paceMaker')
		.directive('footerPacemaker', footerPacemaker);

	function footerPacemaker () {
		return {
			restrict: "EA",
			templateUrl: '/common/footer/footerPacemaker.template.html'
		};
	}
	
})();