'use strict';
(function () {

	angular
	.module('paceMaker')
	.controller('co2CalcCtrl', co2CalcCtrl);

	function co2CalcCtrl() {
		var vm = this;

		vm.co2_band_options = ["A1", "A2", "A3", "A4", "B1", "B2", "C", "D", "E", "F", "G"];
		vm.current_distance = 5;
		vm.current_co2_band = "C";
		vm.current_co2_value = 6;

		var assignCo2Band = function(band) {
			var emissions = 0;
			switch(band) {
				case 'A1':
					emissions = 40;
					break;
				case 'A2':
					emissions = 90;
					break;
				case 'A3':
					emissions = 100;
					break;
				case 'A4':
					emissions = 115;
					break;
				case 'B1':
					emissions = 125;
					break;
				case 'B2':
					emissions = 135;
					break;
				case 'C':
					emissions = 148;
					break;
				case 'D':
					emissions = 163;
					break;
				case 'E':
					emissions = 180;
					break;
				case 'F':
					emissions = 223;
					break;
				case 'G':
					emissions = 230;
					break;
			}
			return emissions;
		};

		vm.calculate = function () {
			vm.co2_savings = ((vm.current_distance * assignCo2Band(vm.current_co2_band))/1000).toFixed(3);

			vm.co2_value = ((vm.co2_savings * vm.current_co2_value)/1000).toFixed(2);
		};
		vm.calculate();

	}

})();


