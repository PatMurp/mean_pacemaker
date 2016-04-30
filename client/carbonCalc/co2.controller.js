'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('co2CalcCtrl', co2CalcCtrl);

	co2CalcCtrl.$inject = ['co2Calculator'];
	function co2CalcCtrl(co2Calculator) {
		var vm = this;

		vm.co2_band_options = ["A1", "A2", "A3", "A4", "B1", "B2", "C", "D", "E", "F", "G"];
		vm.current_distance = 5;
		vm.current_co2_band = "C";
		vm.current_co2_value = 6;

		vm.calculate = function () {
			vm.co2_savings = co2Calculator.CO2savings(vm.current_distance, vm.current_co2_band);
			vm.co2_value = co2Calculator.CO2Value(vm.co2_savings, vm.current_co2_value);
		};
		vm.calculate();

	}

})();


