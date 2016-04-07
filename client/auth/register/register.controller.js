'use strict';
(function () {

	angular
		.module('paceMaker')
		.controller('registerCtrl', registerCtrl);

	registerCtrl.$inject = ['$location','authentication'];
  function registerCtrl($location, authentication) {
    var vm = this;

		vm.credentials = {
			name: "",
			email: "",
			password: ""
		};

		// return to page user was on before
		vm.returnPage = $location.search().page || '/';

		vm.onSubmit = function () {
			vm.formError = "";
			authentication
				.register(vm.credentials)
				.error(function(err) {
					vm.formError = err;
				})
				.then(function() {
					$location.search('page', null);
					$location.path(vm.returnPage);
				});
		};

	}
})();