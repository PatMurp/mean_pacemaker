'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('co2CalcCtrl', co2CalcCtrl);

	function co2CalcCtrl() {
		var vm = this;

		vm.co2_band_options = ["A1", "A2", "A3", "B1", "B2", "C", "D", "E", "F", "G"];
		vm.current_distance = 5;
		vm.current_co2_band = "C";
		vm.current_co2_value = 6;

	}

})();