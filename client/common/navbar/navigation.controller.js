'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('navigationCtrl', navigationCtrl);

		navigationCtrl.$inject = ['$location', 'authentication'];

		function navigationCtrl($location, authentication) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.isActive = function(viewLocation) {
    	return viewLocation === $location.path();
    };

    vm.logout = function() {
      authentication.logout();
      $location.path('/');
    };

  }

})();
