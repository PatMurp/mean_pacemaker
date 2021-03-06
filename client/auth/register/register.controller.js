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

		vm.onSubmit = function () {
			vm.formError = "";
			if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password) {
				vm.formError = "All fields required, please try again";
				return false;
			} else {
				vm.doRegister();
			}
		};

		vm.doRegister = function () {
			vm.formError = "";
			authentication
				.register(vm.credentials)
				.error(function(err) {
					vm.formError = err;
				})
				.then(function() {
					$location.path('/dashboard');
				});
		};

	}
})();